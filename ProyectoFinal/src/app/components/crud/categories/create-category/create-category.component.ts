import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseStorageService } from 'src/app/services/upload-files/upload.service';
import { ToastrService } from 'ngx-toastr';

import { DatabaseService } from 'src/app/services/database/database.service';


@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  loading: boolean;
  categoryForm: FormGroup;
  submitted: boolean;
  modify: boolean = false;

  files_to_remove = [];
  category: any = {};
  urls = [
    {
      name: "original.jpg",
      url: "https://firebasestorage.googleapis.com/v0/b/proyecto-web-36a12.appspot.com/o/attached_files%2Fcategory0%2Foriginal.jpg?alt=media&token=78ecd13f-b6cd-4b70-9a73-2c4d38059a8b"
    },
    {
      name: "original (1).jpg",
      url: "https://firebasestorage.googleapis.com/v0/b/proyecto-web-36a12.appspot.com/o/attached_files%2Fcategory0%2Ftempsnip.png?alt=media&token=9271e1d3-a4fe-40b6-9f60-3953f6b18a1d"
    }]

  constructor(private fb: FormBuilder, private router: Router,
    private firebaseStorage: FirebaseStorageService,
    private db: DatabaseService,
    private toastr: ToastrService) {

    this.categoryForm = this.fb.group({
      name: ['', [Validators.required]],
      details: ['', [Validators.required]],
      files: this.fb.array([]),
    });

    if (this.router.getCurrentNavigation().extras.state) {
      this.modify = true;
      let key = this.router.getCurrentNavigation().extras.state;
      this.db.getType(key).subscribe((category) => {
        this.category = category;
        this.categoryForm.get("name").setValue(this.category.name);
        this.categoryForm.get("details").setValue(this.category.details);
        this.categoryForm.setControl('files', this.fb.array(this.category.files || []));

      })
    }
    this.submitted = false;
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
    if (this.modify && this.files().at(i).value.url != '') {
      this.files_to_remove.push(this.files().at(i).value);
    }
    this.files().removeAt(i);
    console.log(this.files_to_remove)
  }

  onFileInput(event, i): void {
    let f = this.files().at(i);
    f.value.name = event.target.files[0].name;
    f.value.data.append('archivo', event.target.files[0], event.target.files[0].name);
  }

  return() {

    document.getElementById("returnModal").click();
    this.router.navigate(['/dashboard'])
  }



  save() {
    if (!this.categoryForm.touched) {
      this.toastr.warning("No se realizaron cambios", 'La categoría no fue modificada', { timeOut: 5000 });
      return;
    }
    this.loading = true;
    this.submitted = true;
    if (this.categoryForm.invalid) {
      this.toastr.warning("Debe completar todos los campos", 'Error', { timeOut: 5000 });
      this.loading = false;
      return;
    }
    this.insertCategory();
  }

  insertCategory() {
    let key: any;
    let category = this.categoryForm.getRawValue();
    if (this.modify) {
      console.log("Hola");
      key = category.key;
      this.db.updateType(category);
    } else {
      key = this.db.insertType(category);
    }
    console.log(key);
    //this.uploadFiles(key);
  }

  //Upload files to cloud storage
  uploadFiles(key: any) {
    let all_files = this.files();
    let count_items_uploaded = 0;

    this.firebaseStorage.deleteFiles(this.files_to_remove);

    all_files.value.forEach((file) => {
      let file_uploaded = this.firebaseStorage.uploadCloudStorage("category" + key, file.name, file.data.get('archivo'));
      file_uploaded.then(() => {
        let reference = this.firebaseStorage.referenceCloudStorage("category" + key, file.name);
        reference.getDownloadURL().subscribe((URL) => {
          file.url = URL;
          count_items_uploaded++;
          if (count_items_uploaded == all_files.length) {
            this.loading = false;
            this.submitted = false;
          }
        });
      });
    });
  }

}
