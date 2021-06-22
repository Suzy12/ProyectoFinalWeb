import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  fileUrl = "https://drive.google.com/file/d/1t58SW2X1PxjkiZ0RhCgTHNxp7PDFFb7P/view?usp=sharing";

  constructor() { }

  ngOnInit(): void {
  }

}
