import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { HomeComponent } from './components/home/home.component';
import { ExerciseCardComponent } from './components/shared/exercise-card/exercise-card.component';

const routes: Routes = [
  //NOTE: el routing se pone el canActivate la lista de guards
  { path: 'home' , component: HomeComponent},
  { path: 'exercise' , component: ExerciseComponent},
  { path: '**', redirectTo: 'exercise' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
