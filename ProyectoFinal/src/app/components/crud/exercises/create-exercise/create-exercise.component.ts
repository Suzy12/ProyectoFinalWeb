import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms'
import { HighlightService } from 'src/app/services/highlight/highlight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-exercise',
  templateUrl: './create-exercise.component.html',
  styleUrls: ['./create-exercise.component.css']
})
export class CreateExerciseComponent implements OnInit {

  productForm: FormGroup;

  categories = ['Algoritmos Numéricos', 'Listas'];
  submitted = false;

  constructor(private highlightService: HighlightService, private fb: FormBuilder, private router: Router,) {

    this.productForm = this.fb.group({
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
    });
  }

  get form() { return this.productForm.controls }

  ngOnInit() { }

  examples(): FormArray {
    return this.productForm.get("examples") as FormArray
  }
  inputs(): FormArray {
    return this.productForm.get("solution.inputs") as FormArray
  }
  outputs(): FormArray {
    return this.productForm.get("solution.outputs") as FormArray
  }
  files(): FormArray {
    return this.productForm.get("files") as FormArray
  }

  newExample(): FormGroup {
    return this.fb.group({
      call: ['', [Validators.required]],
      result: ['', [Validators.required]],
      comment: ['', [Validators.required]]
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
      name: ['', [Validators.required]],
      url: ['', [Validators.required]]
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
    this.files().removeAt(i);
  }

  onFileInput(file: FileList | null, i): void {
    let f = this.files().at(i);
    f.value.name = file[0].name;
  }


  saveExercise() {
    this.submitted = true;
    if (this.productForm.invalid) {
      return;
    }
    this.submitted = false
  }

  return(){
    this.router.navigate(['/dashboard']) 
  }

}
