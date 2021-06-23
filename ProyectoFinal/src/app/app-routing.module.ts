import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { CreateCategoryComponent } from './components/crud/categories/create-category/create-category.component';
import { DashboardComponent } from './components/crud/dashboard/dashboard.component';
import { CreateExerciseComponent } from './components/crud/exercises/create-exercise/create-exercise.component';
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
  { path: 'dashboard' , component: DashboardComponent},
  { path: 'create-category' , component: CreateCategoryComponent},
  { path: 'create-exercise' , component: CreateExerciseComponent},
  { path: '**', redirectTo: 'create-category' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
