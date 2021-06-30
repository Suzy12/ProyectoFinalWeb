import { Injectable, PipeTransform } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import { ExerciseSortable } from '../../models/exercise.model';
import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortColumn, SortDirection } from '../../directives/sortable.directive';

interface SearchResult {
  exercises: ExerciseSortable[];
  total: number;
};

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
};

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(exercises: ExerciseSortable[], column: SortColumn, direction: string): ExerciseSortable[] {
  if (direction === '' || column === '') {
    return exercises;
  } else {
    return [...exercises].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(exercise: ExerciseSortable, term: string, pipe: PipeTransform) {
  return exercise.name.toLowerCase().includes(term.toLowerCase())
    || exercise.section.toLowerCase().includes(term.toLowerCase())
    || ("nivel " + exercise.level).includes(term.toLowerCase())
    || exercise.creator.toLowerCase().includes(term.toLowerCase())
    || exercise.created.toLowerCase().includes(term.toLowerCase())
}

@Injectable({ providedIn: 'root' })
export class ExercisesService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _exercises$ = new BehaviorSubject<ExerciseSortable[]>([]);
  private _total$ = new BehaviorSubject<number>(0);
  private EXERCISES: ExerciseSortable[] = [];

  private _state: State = {
    page: 1,
    pageSize: 4,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor(private pipe: DecimalPipe) {
  }

  initializeTable() {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._exercises$.next(result.exercises);
      this._total$.next(result.total);
    });
    this._search$.next();
  }

  get exercises$() { return this._exercises$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  set page(page: number) { this._set({ page }); }
  set pageSize(pageSize: number) { this._set({ pageSize }); }
  set searchTerm(searchTerm: string) { this._set({ searchTerm }); }
  set sortColumn(sortColumn: SortColumn) { this._set({ sortColumn }); }
  set sortDirection(sortDirection: SortDirection) { this._set({ sortDirection }); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

    // 1. sort
    let exercises = sort(this.EXERCISES, sortColumn, sortDirection);

    // 2. filter
    exercises = exercises.filter(exercise => matches(exercise, searchTerm, this.pipe));
    const total = exercises.length;

    // 3. paginate
    exercises = exercises.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({ exercises, total });
  }

  getExercise(key: number): ExerciseSortable {
    return this.EXERCISES[key];
  }

  setExercises(exercises: ExerciseSortable[]) {
    this.EXERCISES = exercises;
    this.initializeTable();
  }


}
