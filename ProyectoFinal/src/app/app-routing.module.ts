import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  //NOTE: el routing se pone el canActivate la lista de guards
  { path: 'home' , component: HomeComponent},
  { path: 'exercise' , component: ExerciseComponent},
  { path: 'search' , component: SearchComponent},
  { path: 'login' , component: LoginComponent},
  { path: 'category' , component: CategoryComponent},
  { path: '**', redirectTo: 'category' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
