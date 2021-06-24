import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { type } from 'os';
import { element } from 'protractor';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(public db: AngularFireDatabase) {
  }

  getExercises() {
    return this.db.list('exercises').snapshotChanges().pipe(map((element: any) => {
      return element.map((value: any) => {
        let object = value.payload.val();
        object.key = value.key;
        return object;
      })
    }));
  }

  getExercise(id: string) {
    return this.db.object('exercises/' + id).snapshotChanges().pipe(map((element: any) => {
      let object = element.payload.val();
      object.key = element.key;
      return object;
    }))
  }

  getTypes() {
    return this.db.list('types').snapshotChanges().pipe(map((element: any) => {
      return element.map((value: any) => {
        let object = value.payload.val();
        object.key = value.key;
        return object;
      })
    }));
  }

  getType(id: string) {
    return this.db.object('types/' + id).snapshotChanges().pipe(map((element: any) => {
      let object = element.payload.val();
      object.key = element.key;
      return object;
    }))
  }

  insertExercise(exercise: any) {
    let base = this.db.database.ref('/');
    let pusher = base.child("exercises").push();
    pusher.set(exercise);
    return this.updateNumExercises(1);
  }

  updateNumExercises(value: number) {
    this.db.database.ref("metadata").once("value", (count) => {
      let updates = {}
      updates["num_exercises"] = count.val().num_exercises + value;
      return this.db.database.ref("metadata").update(updates);
    });
  }

  deleteExercise(key: string) {
    this.db.list("/exercises").remove(key);
    return this.updateNumExercises(-1);
  }

  updateExercise(value: any) {
    let key = value.key;
    delete value.key;
    let updates = {}
    updates[key] = value;
    return this.db.database.ref("exercises").update(updates);
  }

  getCantExercises(){
    return this.db.object("metadata").valueChanges().pipe(map((count:any) => {
      return count.num_exercises;
    }));
  }

  getCantTypes(){
    return this.db.object("metadata").valueChanges().pipe(map((count:any) => {
      return count.num_types;
    }));
  }

  getCantOfType(type: string) {
    return this.db.list('exercises').valueChanges().pipe(map((element: any) => {
      let cant = 0;
      element.forEach((value: any) => {
        if (value.section === type) cant++;
      });
      return cant;
    }))
  }

  getCantOfTypes() {
    return this.db.object('/').valueChanges().pipe(map((element: any) => {
      let listaTipos = element.types.map((value: any) => { return { name: value.name, cant: 0 } })
      let exercises = element.exercises
      exercises.forEach((exercise: any) => {
        let temp = listaTipos.find((tipo: any) => tipo.name === exercise.section);
        if (temp) temp.cant++;
      });
      return listaTipos
    }));
  }
}
