import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercise-card',
  templateUrl: './exercise-card.component.html',
  styleUrls: ['./exercise-card.component.css']
})
export class ExerciseCardComponent implements OnInit {

  @Input() exercise: any = {};
  @Input() index: any = {};

  constructor( private router:Router) {
  }

  ngOnInit(): void {
  }

  getExercise(){
    this.router.navigate(['/exercise', this.index], { state: this.exercise })
  }

}
