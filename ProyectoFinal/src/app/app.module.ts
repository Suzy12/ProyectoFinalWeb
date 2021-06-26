import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ExerciseCardComponent } from './components/shared/exercise-card/exercise-card.component';
import { NgbdSortableHeader } from './directives/sortable.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DecimalPipe } from '@angular/common';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { HighlightService } from './services/highlight/highlight.service';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { CategoryComponent } from './components/category/category.component';
import { CreateExerciseComponent } from './components/crud/exercises/create-exercise/create-exercise.component';
import { CreateCategoryComponent } from './components/crud/categories/create-category/create-category.component';
import { DashboardComponent } from './components/crud/dashboard/dashboard.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ExerciseCardComponent,
    NgbdSortableHeader,
    FooterComponent,
    ExerciseComponent,
    SearchComponent,
    LoginComponent,
    CategoryComponent,
    CreateExerciseComponent,
    CreateCategoryComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    HttpClientModule
  ],
  providers: [DecimalPipe, HighlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
