import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { type } from 'os';
import { element } from 'protractor';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  documentToDomainObject = (_: any) => {
    const object = _.payload.doc.data();
    object.id = _.payload.doc.id;
    return object;
  }



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

  getCantType(type: string) {
    return this.db.list('exercises').valueChanges().pipe(map((element: any) => {
      let cant = 0;
      element.forEach((value: any) => {
        if (value.section === type) cant++;
      });
      return cant;
    }))
  }

  getCantTypes() {
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
