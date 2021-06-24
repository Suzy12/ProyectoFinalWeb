import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  exercises = [1, 2, 3, 4, 5];
  slides = [];

  constructor(private db: DatabaseService) { }

  ngOnInit(): void {
    let slide = Math.ceil(this.exercises.length / 3);
    var mult = 0;
    for (var i = 0; i < slide; i += 1) {
      this.slides.push(mult);
      mult += 3;
    }
    this.db.getCantTypes().subscribe((data:any) => {
      console.log(data)
    });
    
  }

}
