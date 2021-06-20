
import {Component, QueryList, ViewChildren,  OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {Country} from '../../models/category.model';
import {CategoriesService} from '../../services/categories/categories.service';
import {NgbdSortableHeader, SortEvent} from '../../directives/sortable.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  countries$: Observable<Country[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public categoriesService: CategoriesService) {
    this.countries$ = categoriesService.countries$;
    this.total$ = categoriesService.total$;
  }

  ngOnInit(): void {
  }

  onSort({column, direction}: SortEvent) {
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
