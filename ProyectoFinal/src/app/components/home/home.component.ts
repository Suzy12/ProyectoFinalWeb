
import { Component, QueryList, ViewChildren, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Category } from '../../models/category.model';
import { CategoriesService } from '../../services/categories/categories.service';
import { NgbdSortableHeader, SortEvent } from '../../directives/sortable.directive';


import { EXERCISES } from '../../models/exercises';
import { Exercise } from 'src/app/models/exercise.model';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  exercises: Exercise[] = [];
  slides = [];


  categories$: Observable<Category[]>;
  total$: Observable<number>;
  total: number[] = [];

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public categoriesService: CategoriesService, private router: Router,
    private db: DatabaseService) {
    this.categories$ = categoriesService.categories$;
    this.total$ = categoriesService.total$;
    this.total$.subscribe(event => this.total = Array(event).fill(1).map((x, i) => i + 1));
  }

  ngOnInit(): void {
    this.getLastTenExercises();
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.categoriesService.sortColumn = column;
    this.categoriesService.sortDirection = direction;
  }

  getLastTenExercises() {
    this.db.getLastTenExercises().subscribe((exercises) => {
      this.exercises = exercises;
      let slide = Math.ceil(this.exercises.length / 3);
      var mult = 0;
      for (var i = 0; i < slide; i += 1) {
        this.slides.push(mult);
        mult += 3;
      }
    })
  }

  getCategory(key: number) {
    this.router.navigate(['/category', key]);
  }

}
