import { Injectable } from '@angular/core';
import { Exercise } from '../../../models/exercise.model'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private exercises:Exercise[] = [];

  constructor() { }

  searchExercise( term:string, searchOption:number): Exercise[]{
    let exerciseArr: Exercise[] = [];
    term = term.toLowerCase();

    for( let i = 0; i < this.exercises.length; i ++ ){
      let exercise = this.exercises[i];
      let option = "";

      switch(searchOption){
        case 2:
          option = exercise.section.toLowerCase();
          break;
        case 3:
          option = exercise.details.toLowerCase();
          break;
        default:
          option = exercise.name.toLowerCase();
          break;

      }

      if( option.indexOf( term ) >= 0  ){
        exercise.idx = i;
        exerciseArr.push( exercise )
      }
    }
    return exerciseArr;
  }


}
