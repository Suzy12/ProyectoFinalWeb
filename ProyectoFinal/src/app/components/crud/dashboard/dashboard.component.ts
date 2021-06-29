import { Component, QueryList, ViewChildren, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CategorySortable } from '../../../models/category.model';
import { CategoriesService } from '../../../services/categories/categories.service';
import { NgbdSortableHeader, SortEvent } from '../../../directives/sortable.directive';
import { FirebaseStorageService } from 'src/app/services/upload-files/upload.service';
import { DatabaseService } from 'src/app/services/database/database.service';
import { Router } from '@angular/router';
import { ExerciseSortable } from 'src/app/models/exercise.model';
import { ExercisesService } from 'src/app/services/exercises/exercises.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  total_categories: number = 0;
  total_exercises: number = 0;
  total_attached_files: any = 0;

  delete_category_key = -1;
  delete_exercise_key = -1;

  categories$: Observable<CategorySortable[]>;
  total$: Observable<number>;

  exercises$: Observable<ExerciseSortable[]>;
  total_exercises$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public categoriesService: CategoriesService,
    public exercisesService: ExercisesService,
    private firebaseStorage: FirebaseStorageService,
    public db: DatabaseService,
    private router: Router,
    private toastr: ToastrService) {

    this.firebaseStorage.countFilesCloudStorage().then((count) => {
      this.total_attached_files = count;
    });
    this.db.getCantTypes().subscribe((count) => {
      this.total_categories = count;
    })
    this.db.getCantExercises().subscribe((count) => {
      this.total_exercises = count;
    })
    this.getExercisesTable();
    this.getCategoriesTable();
  }

  ngOnInit(): void {
  }

  getCategory(key: number) {
    this.router.navigate(['/category', key]);
  }
  modifyCategory(key: any) {
    this.router.navigate(['/create-category'], { state: key })
  }
  deleteCategory() {
    document.getElementById("deleteCategoryModal").click();
    this.db.deleteType(this.delete_category_key.toString());
    this.setDeleteCategory(-1);
  }


  getExercise(key: number) {
    console.log(key);
    this.db.getExercise(key.toString()).subscribe((exercise)=> {
      this.router.navigate(['/exercise', key], { state: exercise });
    })
    
  }
  modifyExercise(key: any) {
    this.router.navigate(['/create-exercise'], { state: key })
  }
  deleteExercise() {
    document.getElementById("deleteExerciseModal").click();
    this.db.deleteExercise(this.delete_exercise_key.toString());
    this.setDeleteExercise(-1);
  }

  /* MODAL DELETE */

  setDeleteCategory(key: any) {
    this.delete_category_key = key;
  }
  setDeleteExercise(key: any) {
    this.delete_exercise_key = key;
  }
  /* END: MODAL DELETE */

  getCategoriesTable() {
    this.db.getTypes().subscribe(() => {
      this.db.getCantOfTypes().then((categories: any) => {
        this.categoriesService.setCategories(categories);
        this.categories$ = this.categoriesService.categories$;
        this.total$ = this.categoriesService.total$;
      });
    })
  }

  getExercisesTable() {
    this.db.getExercises().subscribe((exercises) => {
      this.exercisesService.setExercises(exercises);
      this.exercises$ = this.exercisesService.exercises$;
      this.total_exercises$ = this.exercisesService.total$;
    });
  }

}
