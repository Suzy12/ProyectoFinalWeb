import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { UploadService } from 'src/app/services/upload-files/upload.service';

import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  productForm: FormGroup;
  submitted = false;
  @ViewChild("fileUpload", { static: false }) fileUpload: ElementRef;
  files_to_upload = [];


  constructor(private fb: FormBuilder, private router: Router, private uploadService: UploadService) {

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

  saveCategory() {

    this.productForm.getRawValue().files.forEach(file => {
      this.files_to_upload.push({ data: file, inProgress: false, progress: 0 });
    });
    this.files_to_upload.forEach(file => {  
      this.uploadFile(file);  
    });  
  }

  uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file.data);
    file.inProgress = true;
    this.uploadService.upload(formData).pipe(
      map(event => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            file.progress = Math.round(event.loaded * 100 / event.total);
            console.log(file.progress);
            break;
          case HttpEventType.Response:
            return event;
        }
      }),
      catchError((error: HttpErrorResponse) => {
        file.inProgress = false;
        return of(`Upload failed: ${file.data.name}`);
      })).subscribe((event: any) => {
        if (typeof (event) === 'object') {
          console.log(event.body);
        }
      });
  }

}
