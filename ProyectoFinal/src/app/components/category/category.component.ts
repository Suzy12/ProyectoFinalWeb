import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {


  category: any = {}
  fileUrl = "https://drive.google.com/file/d/1t58SW2X1PxjkiZ0RhCgTHNxp7PDFFb7P/view?usp=sharing";

  constructor(private activatedRoute: ActivatedRoute,
    private categoryService: CategoriesService) {
    this.activatedRoute.params.subscribe(params => {
      this.category = this.categoryService.getCategory(params['key']);
    })
  }

  ngOnInit(): void {
  }

}
