import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
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

  getLastTenExercises() {
    return this.db.list('exercises').snapshotChanges().pipe(map((element: any) => {
      return element.map((value: any) => {
        let object = value.payload.val();
        object.key = value.key;
        return object;
      }).slice(element.length - 10);
    }));
  }

  getExercise(id: string) {
    return this.db.object('exercises/' + id).snapshotChanges().pipe(map((element: any) => {
      console.log(element);
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

  getType(id: any) {
    return this.db.object('types/' + id).snapshotChanges().pipe(map((element: any) => {
      let object = element.payload.val();
      object.key = element.key;
      return object;
    }))
  }

  insertType(type: any) {
    let base = this.db.database.ref('/');
    let pusher = base.child("types").push();
    let key = pusher.key;
    pusher.set(type);
    this.updateNumTypes(1);
    return key
  }

  updateNumTypes(value: number) {
    this.db.database.ref("metadata").once("value", (count) => {
      let updates = {}
      updates["num_types"] = count.val().num_types + value;
      return this.db.database.ref("metadata").update(updates);
    });
  }

  updateType(value: any) {
    let key = value.key;
    delete value.key;
    let updates = {}
    updates[key] = value;
    return this.db.database.ref("types").update(updates);
  }

  deleteType(key: string) {
    this.db.database.ref("types/" + key).get().then((types: any) => {
      let name = types.val().name;
      this.db.database.ref("exercises").get().then((exercises: any) => {
        let exerciseDB = this.db.list("exercises");
        let updateNum = 0;
        exercises.forEach((element: any) => {
          if (element.val().section === name) {
            exerciseDB.remove(element.key);
            updateNum--;
          };
        });
        this.updateNumExercises(updateNum);
      });
    }).finally(() => {
      this.db.list("/types").remove(key);
      return this.updateNumTypes(-1);
    });
  }

  insertExercise(exercise: any) {
    let base = this.db.database.ref('/');
    let pusher = base.child("exercises").push();
    let key = pusher.key;
    exercise.num_reviews = 0;
    exercise.level = 1;
    exercise.code = key
    const d = new Date()
    exercise.created = new Date(d.getTime() - d.getTimezoneOffset() * 60 * 1000).toISOString().split('T')[0]
    pusher.set(exercise);
    this.updateNumExercises(1)
    return key;
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

  getCantExercises() {
    return this.db.object("metadata").valueChanges().pipe(map((count: any) => {
      return count.num_exercises;
    }));
  }

  getCantTypes() {
    return this.db.object("metadata").valueChanges().pipe(map((count: any) => {
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


  //Get amount of every type in the database
  getCantOfTypes() {
    let listaTipos = []
    return this.db.database.ref('types').get().then((element: any) => {
      element.forEach((type: any) => {
        listaTipos.push({ name: type.val().name, count: 0, key: type.key })
      });
      return this.db.database.ref("exercises").get().then((exercises: any) => {
        exercises.forEach((exercise: any) => {
          let found = listaTipos.find((tipo: any) => tipo.name === exercise.val().section)
          if (found) found.count++;
        });
        return listaTipos;
      })
    })
  }

  getCantStars() {
    let listaEstrellas = []
    for (let i = 1; i < 6; i++) {
      listaEstrellas.push({
        estrellas: '' + i,
        cant: 0
      })
    }
    return this.db.object('exercises').valueChanges().pipe(map((element: any) => {
      element.forEach((exercise: any) => {
        let temp = listaEstrellas.find((estrella: any) => estrella.estrellas === exercise.level);
        if (temp) temp.cant++;
      });
      return listaEstrellas
    }));
  }

  searchExercises(term: string) {
    return this.db.list('exercises').snapshotChanges().pipe(map((element: any) => {
      term = term.toLowerCase();
      let exercises = element.filter((exercise: any) => exercise.payload.val().name.toLowerCase().indexOf(term) >= 0);
      return exercises.map((value: any) => {
        let object = value.payload.val();
        object.key = value.key;
        return object;
      })
    }));
  }

  searchExercisesByType(term: string) {
    return this.db.list('exercises').snapshotChanges().pipe(map((element: any) => {
      term = term.toLowerCase();
      let exercises = element.filter((exercise: any) => exercise.payload.val().section.toLowerCase().indexOf(term) >= 0);
      return exercises.map((value: any) => {
        let object = value.payload.val();
        object.key = value.key;
        return object;
      })
    }));
  }

  searchExercisesByDetails(term: string) {
    return this.db.list('exercises').snapshotChanges().pipe(map((element: any) => {
      term = term.toLowerCase();
      let exercises = element.filter((exercise: any) => exercise.payload.val().details.toLowerCase().indexOf(term) >= 0);
      return exercises.map((value: any) => {
        let object = value.payload.val();
        object.key = value.key;
        return object;
      })
    }));
  }

  searchType(term: string) {
    return this.db.list('types').snapshotChanges().pipe(map((element: any) => {
      let type = element.filter((exercise: any) => exercise.payload.val().name == term);
      return type.map((value: any) => {
        let object = value.payload.val();
        object.key = value.key;
        return object;
      })[0];
    }));
  }

  updateStarRating(key: string, stars: number) {
    return this.db.database.ref('exercises/' + key).get().then((element: any) => {
      element = element.val()
      let updates = {};
      let reviews = 0;
      if (element.num_reviews) {
        reviews = parseInt(element.num_reviews);
        stars = Math.ceil(((element.level * reviews + stars) / (reviews + 1)))
      }
      updates[key + "/level"] = '' + stars;
      updates[key + "/num_reviews"] = '' + (reviews + 1);
      this.db.database.ref("exercises").update(updates);
    })
      .then(() => { return "El ejercicio fue calificado exitosamente" })
      .catch(() => { return "Hubo un error, intente de nuevo" })
  }

  updateFilesExercise(key: string, files: any[]) {
    try {
      let updates = {};
      updates[key + "/files"] = files;
      this.db.database.ref("exercises").update(updates);
      return "Se subieron los archivos exitosamente"
    } catch (error) { return "Hubo un error, intente de nuevo" }
  }

  updateFilesCategory(key: string, files: any[]) {
    try {
      let updates = {};
      updates[key + "/files"] = files;
      this.db.database.ref("types").update(updates);
      return "Se subieron los archivos exitosamente"
    } catch (error) { return "Hubo un error, intente de nuevo" }
  }
}
