import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { FirebaseStorageService } from 'src/app/services/upload-files/upload.service';
import { timer } from 'rxjs';

import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';
import { DatabaseService } from 'src/app/services/database/database.service';


@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  loading: boolean;
  categoryForm: FormGroup;
  submitted = false;
  @ViewChild("fileUpload", { static: false }) fileUpload: ElementRef;
  files_to_upload = [];


  public archivoForm = new FormGroup({
    archivo: new FormControl(null, Validators.required),
  });

  public mensajeArchivo = 'No hay un archivo seleccionado';
  public datosFormulario = new FormData();
  public nombreArchivo = '';
  public URLPublica = '';
  public porcentaje = 0;
  public finalizado = false;


  constructor(private fb: FormBuilder, private router: Router,
    private firebaseStorage: FirebaseStorageService,
    private db: DatabaseService) {

    this.categoryForm = this.fb.group({
      name: ['', [Validators.required]],
      details: ['', [Validators.required]],
      files: this.fb.array([]),
    });

    this.loading = false;
  }

  get form() { return this.categoryForm.controls }

  ngOnInit() { }

  files(): FormArray {
    return this.categoryForm.get("files") as FormArray
  }

  newFile(): FormGroup {
    return this.fb.group({
      name: [''],
      data: [new FormData()],
      url: ['']
    })
  }

  addFile() {
    this.files().push(this.newFile());
  }

  removeFile(i: number) {
    this.files().removeAt(i);
  }

  onFileInput(event, i): void {
    let f = this.files().at(i);
    f.value.name = event.target.files[0].name;
    f.value.data.append('archivo', event.target.files[0], event.target.files[0].name);
  }


  saveExercise() {
    this.loading = true;
    this.submitted = true;
    if (this.categoryForm.invalid) {
      this.loading = false;
      return;
    }
    this.uploadFiles();
    this.submitted = false;
  }

  return() {
    this.router.navigate(['/dashboard'])
  }

  //Upload files to cloud storage
  uploadFiles() {
    let all_files = this.files();
    this.db.getCantTypes().subscribe((count) => {
      all_files.value.forEach((file, index) => {
        let file_uploaded = this.firebaseStorage.uploadCloudStorage("category"+count, file.name, file.data.get('archivo'));
        file_uploaded.then(() => {
          let reference = this.firebaseStorage.referenceCloudStorage("category"+count, file.name);
          reference.getDownloadURL().subscribe((URL) => {
            file.url = URL;
            if (index == all_files.length - 1) {
              this.loading = false;
            }
          });
        });
      })
    });
  }

  createCategory(){
    
  }
  
}
