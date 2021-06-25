import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight/highlight.service';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css'],
  providers: [NgbRatingConfig]
})
export class ExerciseComponent implements OnInit {

  exercise:any = {};
  currentRate = 1;
  source = "";
  highlighted: boolean = false;
  fileUrl = "https://drive.google.com/file/d/1t58SW2X1PxjkiZ0RhCgTHNxp7PDFFb7P/view?usp=sharing";

  constructor(private highlightService: HighlightService, config: NgbRatingConfig, private router: Router) {
    config.max = 5;
    if (this.router.getCurrentNavigation().extras.state) {
      this.exercise = this.router.getCurrentNavigation().extras.state;
      this.source = "<pre><code class=\"language-python\">"+this.exercise.solution.code+"</code></pre>";
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

}
