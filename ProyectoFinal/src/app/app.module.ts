import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ExerciseCardComponent } from './components/shared/exercise-card/exercise-card.component';
import { NgbdSortableHeader } from './directives/sortable.directive';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DecimalPipe} from '@angular/common';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { HighlightService } from './services/highlight/highlight.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ExerciseCardComponent,
    NgbdSortableHeader,
    FooterComponent,
    ExerciseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [DecimalPipe, HighlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
