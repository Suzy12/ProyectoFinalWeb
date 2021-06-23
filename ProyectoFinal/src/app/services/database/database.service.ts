import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
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
}
