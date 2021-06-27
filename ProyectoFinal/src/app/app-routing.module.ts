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
import { LoggedInGuard } from './guards/logged-in.guard';
import { NotLoggedInGuard } from './guards/not-logged-in.guard';

const routes: Routes = [
  //NOTE: el routing se pone el canActivate la lista de guards
  { path: 'home' , component: HomeComponent},
  { path: 'exercise/:key' , component: ExerciseComponent},
  { path: 'search' , component: SearchComponent},
  { path: 'login' , component: LoginComponent, canActivate:[NotLoggedInGuard]},
  { path: 'category/:key' , component: CategoryComponent},
  { path: 'dashboard' , component: DashboardComponent, canActivate:[LoggedInGuard]},
  { path: 'create-category' , component: CreateCategoryComponent, canActivate:[LoggedInGuard]},
  { path: 'create-exercise' , component: CreateExerciseComponent, canActivate:[LoggedInGuard]},
  { path: '**', pathMatch:"full",redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
