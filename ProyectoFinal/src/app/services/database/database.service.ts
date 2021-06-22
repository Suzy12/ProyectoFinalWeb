import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(public db: AngularFireDatabase) { }

  getExercises(){
    return this.db.list('ejercicios').valueChanges();
  }

  getExercise(id: number){
    return this.db.object('ejercicios/'+ (id-1)).valueChanges();
  }

  getCategories(){
    return this.db.list('tipos').valueChanges();
  }

  getCategory(id: number){
    return this.db.object('tipos/'+ (id-1)).valueChanges();
  }
}
