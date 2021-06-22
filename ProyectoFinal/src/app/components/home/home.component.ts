
import { Component, QueryList, ViewChildren, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../../models/category.model';
import { CategoriesService } from '../../services/categories/categories.service';
import { NgbdSortableHeader, SortEvent } from '../../directives/sortable.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  exercises = [1, 2, 3, 4, 5];
  slides = [];


  countries$: Observable<Country[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public categoriesService: CategoriesService) {
    this.countries$ = categoriesService.countries$;
    this.total$ = categoriesService.total$;
  }

  ngOnInit(): void {

    let slide = Math.ceil(this.exercises.length / 3);
    var mult = 0;
    for (var i = 0; i < slide; i += 1) {
      this.slides.push(mult);
      mult += 3;
    }
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

}
