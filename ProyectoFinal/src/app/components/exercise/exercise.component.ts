import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight/highlight.service';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css'],
  providers: [NgbRatingConfig]
})
export class ExerciseComponent implements OnInit {

  currentRate = 1;
  source = "<pre><code class=\"language-python\"> def cantidadDigitos (num):\n\n    if num == 0: # El 0 es una excepción\n        return 1\n    num = abs(num) #lo hace positivo siempre\n    contador = 0\n    while num > 0:\n        contador = contador + 1\n        num = num \/\/ 10\n    return contador </code></pre>";
  highlighted: boolean = false;
  fileUrl = "https://drive.google.com/file/d/1t58SW2X1PxjkiZ0RhCgTHNxp7PDFFb7P/view?usp=sharing";

  constructor(private highlightService: HighlightService, config: NgbRatingConfig) {
    config.max = 5;
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
