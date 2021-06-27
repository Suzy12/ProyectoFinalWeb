import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-exercise-card',
  templateUrl: './exercise-card.component.html',
  styleUrls: ['./exercise-card.component.css']
})
export class ExerciseCardComponent implements OnInit {

  @Input() exercise: any = {};
  @Input() index: any = {};

  constructor( private router:Router, 
    private db: DatabaseService) {
  }

  ngOnInit(): void {
  }

  getType(){
    this.db.searchType(this.exercise.section).subscribe((category)=>{
      this.router.navigate(['/category', category.key]);
    })
  }

  getExercise(){
    this.router.navigate(['/exercise', this.index], { state: this.exercise })
  }

}
