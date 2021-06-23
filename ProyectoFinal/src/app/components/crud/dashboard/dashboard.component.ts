import { Component, QueryList, ViewChildren, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Country } from '../../../models/category.model';
import { CategoriesService } from '../../../services/categories/categories.service';
import { NgbdSortableHeader, SortEvent } from '../../../directives/sortable.directive';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  countries$: Observable<Country[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public categoriesService: CategoriesService) {
    this.countries$ = categoriesService.countries$;
    this.total$ = categoriesService.total$;
  }

  ngOnInit(): void {
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
