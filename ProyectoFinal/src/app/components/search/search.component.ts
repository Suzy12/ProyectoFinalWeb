import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  slides = [];
  exercises: any[] = [];
  searchForm: FormGroup;

  constructor(private fb: FormBuilder,
    private db: DatabaseService) {
    this.searchForm = this.fb.group({
      search: ['', [Validators.required]],
      type: ['Nombre', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.db.getFilesCategory("1").subscribe((value:any) => {
      console.log(value)
    })
  }

  search() {
    let form = this.searchForm.getRawValue();
    this.slides = [];
    switch (form.type) {
      case "Descripción":
        this.db.searchExercisesByDetails(form.search).subscribe((exercises) => { this.exercises = exercises; this.getSlidesCarousel()})
        break;
      case "Categoría":
        this.db.searchExercisesByType(form.search).subscribe((exercises) => { this.exercises = exercises; this.getSlidesCarousel()})
        break;
      default:
        this.db.searchExercises(form.search).subscribe((exercises) => { this.exercises = exercises; this.getSlidesCarousel()})
        break;
    }
  }

  getSlidesCarousel() {
    console.log(this.exercises)
    /* Create 3 columns for carousel */
    let slide = Math.ceil(this.exercises.length / 3);
    var mult = 0;
    for (var i = 0; i < slide; i += 1) {
      this.slides.push(mult);
      mult += 3;
    }
  }

}
