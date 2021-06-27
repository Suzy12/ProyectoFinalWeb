
import { Component, QueryList, ViewChildren, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CategorySortable } from '../../models/category.model';
import { CategoriesService } from '../../services/categories/categories.service';
import { NgbdSortableHeader, SortEvent } from '../../directives/sortable.directive';

import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  exercises: any[] = [];
  slides = [];
  levels : any[] = []


  categories$: Observable<CategorySortable[]>;
  total$: Observable<number>;
  total: number[] = [];

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public categoriesService: CategoriesService, private router: Router,
    private db: DatabaseService) {
  }

  ngOnInit(): void {
    this.getLastTenExercises();
    this.getExercisesLevels();
    this.getCategoriesTable();
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
      this.getSlidesCarousel();
    })
  }

  getSlidesCarousel() {
    /* Create 3 columns for carousel */
    let slide = Math.ceil(this.exercises.length / 3);
    var mult = 0;
    for (var i = 0; i < slide; i += 1) {
      this.slides.push(mult);
      mult += 3;
    }
  }

  getExercisesLevels(){
    this.db.getCantStars().subscribe((levels)=>{
      this.levels = levels;
    });
  }

  getCategoriesTable(){
    this.db.getCantOfTypes().subscribe((categories)=>{
      this.categoriesService.setCategories(categories);
      this.categories$ = this.categoriesService.categories$;
      this.total$ = this.categoriesService.total$;
    });
  }



  getCategory(key: number) {
    this.router.navigate(['/category', key]);
  }

}
