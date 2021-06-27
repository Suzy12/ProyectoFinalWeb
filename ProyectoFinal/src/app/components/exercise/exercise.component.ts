import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight/highlight.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css'],
  providers: [NgbRatingConfig]
})
export class ExerciseComponent implements OnInit {

  exercise: any = {};
  currentRate = 1;
  source = "";
  highlighted: boolean = false;
  urls = [
    {
      name: "original.jpg",
      url: "https://firebasestorage.googleapis.com/v0/b/proyecto-web-36a12.appspot.com/o/category0%2Foriginal%20(1).jpg?alt=media&token=90ae22be-a65b-418f-892c-47d3a6727d4b"
    },
    {
      name: "original (1).jpg",
      url: "https://firebasestorage.googleapis.com/v0/b/proyecto-web-36a12.appspot.com/o/category0%2FSoftware_Architecture_Document_SF.docx?alt=media&token=a810773a-54df-43c8-8ec5-f70dd46939a4"
    }]


  constructor(private highlightService: HighlightService, config: NgbRatingConfig, private router: Router,
    private db: DatabaseService) {
    config.max = 5;
    if (this.router.getCurrentNavigation().extras.state) {
      this.exercise = this.router.getCurrentNavigation().extras.state;
      this.source = "<pre><code class=\"language-python\">" + this.exercise.solution.code + "</code></pre>";
      console.log(this.router.getCurrentNavigation().extras.state)
    }
  }

  ngOnInit() {
  }


  ngAfterViewChecked() {
    if (this.source && !this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

  getType(){
    this.db.searchType(this.exercise.section).subscribe((category)=>{
      this.router.navigate(['/category', category.key]);
    })
  }

  rateExercise(){
    this.db.updateStarRating(this.exercise.key, this.currentRate);
  }

}
