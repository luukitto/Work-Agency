import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FormatDataComponent } from './format-data/format-data.component';
import {FormatDatePipe} from "../shared/format-data.pipe";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TextComparisonComponent} from "./text-comparision/text-comparision.component";
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    FormatDataComponent,
    FormatDatePipe,
    TextComparisonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
