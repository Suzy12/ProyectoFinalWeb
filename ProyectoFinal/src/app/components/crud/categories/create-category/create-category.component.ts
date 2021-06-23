import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  productForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router) {

    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      details: ['', [Validators.required]],
      files: this.fb.array([]),
    });
  }

  get form() { return this.productForm.controls }

  ngOnInit() { }

  files(): FormArray {
    return this.productForm.get("files") as FormArray
  }

  newFile(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required]],
      url: ['', [Validators.required]]
    })
  }

  addFile() {
    this.files().push(this.newFile());
  }

  removeFile(i: number) {
    this.files().removeAt(i);
  }

  onFileInput(file: FileList | null, i): void {
    let f = this.files().at(i);
    f.value.name = file[0].name;
    console.log(f)
    console.log(file);
  }


  saveExercise() {
    this.submitted = true;
    if (this.productForm.invalid) {
      return;
    }
    console.log(this.productForm.value);
    this.submitted = false
  }

  return() {
    this.router.navigate(['/dashboard'])
  }

}
