import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {


  category: any = {}
  urls = [
    {name: "original.jpg",
    url:"https://firebasestorage.googleapis.com/v0/b/proyecto-web-36a12.appspot.com/o/category0%2Foriginal%20(1).jpg?alt=media&token=90ae22be-a65b-418f-892c-47d3a6727d4b"}, 
    {name: "original (1).jpg",
    url:"https://firebasestorage.googleapis.com/v0/b/proyecto-web-36a12.appspot.com/o/category0%2FSoftware_Architecture_Document_SF.docx?alt=media&token=a810773a-54df-43c8-8ec5-f70dd46939a4"}]


  constructor(private activatedRoute: ActivatedRoute,
    private categoryService: CategoriesService,
    private db: DatabaseService) {
    this.activatedRoute.params.subscribe(params => {
      this.db.getType(params['key']).subscribe((category)=>{
        this.db.getCantOfType(category.name).subscribe((count)=>{
          this.category = category;
          this.category.count = count;
        });
      })
    })
  }

  ngOnInit(): void {
  }

}
