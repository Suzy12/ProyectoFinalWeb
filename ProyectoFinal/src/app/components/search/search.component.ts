import { Component, OnInit } from '@angular/core';
import {EXERCISES} from '../../models/exercises';
import { Exercise } from 'src/app/models/exercise.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  slides = [];
  exercises: Exercise[] = EXERCISES;

  constructor() { }

  ngOnInit(): void {
    let slide = Math.ceil(this.exercises.length / 3);
    var mult = 0;
    for (var i = 0; i < slide; i += 1) {
      this.slides.push(mult);
      mult += 3;
    }
  }

}
