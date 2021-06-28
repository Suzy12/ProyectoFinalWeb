import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms'
import { HighlightService } from 'src/app/services/highlight/highlight.service';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database/database.service';
import { ToastrService } from 'ngx-toastr';
import { FirebaseStorageService } from 'src/app/services/upload-files/upload.service';

@Component({
  selector: 'app-create-exercise',
  templateUrl: './create-exercise.component.html',
  styleUrls: ['./create-exercise.component.css']
})
export class CreateExerciseComponent implements OnInit {

  exerciseForm: FormGroup;

  exercise: any = {};
  categories = [];
  submitted: boolean;
  loading: boolean;
  modify: boolean = false;
  files_to_remove = [];

  exam = [
    {call: "cantidadDeDigitos(12345)", comment: "Poc", result: "5"}, 
    {call: "cantidadDeDigitos(0)",comment: "Cero tiene un digito",result: "1"}]

  urls = [
    {
      name: "original.jpg",
      url: "https://firebasestorage.googleapis.com/v0/b/proyecto-web-36a12.appspot.com/o/attached_files%2Fcategory0%2Foriginal.jpg?alt=media&token=78ecd13f-b6cd-4b70-9a73-2c4d38059a8b"
    },
    {
      name: "original (1).jpg",
      url: "https://firebasestorage.googleapis.com/v0/b/proyecto-web-36a12.appspot.com/o/attached_files%2Fcategory0%2Ftempsnip.png?alt=media&token=9271e1d3-a4fe-40b6-9f60-3953f6b18a1d"
    }]


  constructor(private highlightService: HighlightService, private fb: FormBuilder, private router: Router,
    private db: DatabaseService, private toastr: ToastrService, private firebaseStorage: FirebaseStorageService) {

    this.exerciseForm = this.fb.group({
      name: ['', [Validators.required]],
      section: ['', [Validators.required]],
      details: ['', [Validators.required]],
      solution: this.fb.group({
        outputs: this.fb.array([]),
        inputs: this.fb.array([]),
        code: ['', [Validators.required]]

      }),
      examples: this.fb.array([]),
      files: this.fb.array([]),
      creator: [''],
    });

    this.getAllCategories();

    if (this.router.getCurrentNavigation().extras.state) {
      this.modify = true;
      let key = this.router.getCurrentNavigation().extras.state;
      this.db.getExercise(key.toString()).subscribe((exercise) => {
        this.exercise = exercise;
        console.log(exercise);
        this.exerciseForm.get("name").setValue(this.exercise.name);
        this.exerciseForm.get("section").setValue(this.exercise.section);
        this.exerciseForm.get("details").setValue(this.exercise.details);
        this.exerciseForm.get("solution.code").setValue(this.exercise.solution.code);
        this.exerciseForm.get("creator").setValue(localStorage.getItem("nombre"))

        this.exercise.examples.forEach(element => {
          let f = this.newExample()
          f.setValue(element);
          this.examples().push(f);
        });

        this.exercise.solution.inputs.forEach(element => {
          let f = this.newSolution();
          f.setValue(element);
          this.inputs().push(f);
        });

        this.exercise.solution.outputs.forEach(element => {
          let f = this.newSolution();
          f.setValue(element);
          this.outputs().push(f);
        });
        
        if (exercise.files) {
          this.exerciseForm.setControl('files', this.fb.array(this.exercise.files || []));
        }
      })
    }

    this.submitted = false;
    this.loading = false;
  }

  getAllCategories() {
    this.db.getTypes().subscribe((categories) => {
      this.categories = categories;
    })
  }

  get form() { return this.exerciseForm.controls }

  ngOnInit() { }

  examples(): FormArray {
    return this.exerciseForm.get("examples") as FormArray
  }
  inputs(): FormArray {
    return this.exerciseForm.get("solution.inputs") as FormArray
  }
  outputs(): FormArray {
    return this.exerciseForm.get("solution.outputs") as FormArray
  }
  files(): FormArray {
    return this.exerciseForm.get("files") as FormArray
  }

  newExample(): FormGroup {
    return this.fb.group({
      call: [''],
      result: [''],
      comment: ['']
    })
  }
  newSolution(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]]
    })
  }
  newFile(): FormGroup {
    return this.fb.group({
      name: [''],
      data: [new FormData()],
      url: ['']
    })
  }

  addExample() {
    this.examples().push(this.newExample());
  }
  addInput() {
    this.inputs().push(this.newSolution());
  }
  addOutput() {
    this.outputs().push(this.newSolution());
  }
  addFile() {
    this.files().push(this.newFile());
  }


  removeExample(i: number) {
    this.examples().removeAt(i);
  }
  removeInput(i: number) {
    this.inputs().removeAt(i);
  }
  removeOutput(i: number) {
    this.outputs().removeAt(i);
  }
  removeFile(i: number) {
    if (this.modify && this.files().at(i).value.url != '') {
      this.files_to_remove.push(this.files().at(i).value);
    }
    this.files().removeAt(i);
    console.log(this.files_to_remove);
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
    if (!this.exerciseForm.touched) {
      this.toastr.warning("No se realizaron cambios", 'La categoría no fue modificada', { timeOut: 5000 });
      return;
    }
    this.loading = true;
    this.submitted = true;
    if (this.exerciseForm.invalid) {
      this.toastr.warning("Debe completar todos los campos", 'Error', { timeOut: 5000 });
      this.loading = false;
      return;
    }
    this.insertExercise();
  }

  insertExercise() {
    let key: any;
    let exercise = this.exerciseForm.getRawValue();
    if (this.modify) {
      key = exercise.key;
      this.db.updateExercise(exercise);
    } else {
      key = this.db.insertExercise(exercise);
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
      let file_uploaded = this.firebaseStorage.uploadCloudStorage("exercise" + key, file.name, file.data.get('archivo'));
      file_uploaded.then(() => {
        let reference = this.firebaseStorage.referenceCloudStorage("exercise" + key, file.name);
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
