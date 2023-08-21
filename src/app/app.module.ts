import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FormatDataComponent } from './format-data/format-data.component';
import {FormatDatePipe} from "../shared/format-data.pipe";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TextComparisonComponent} from "./text-comparision/text-comparision.component";
import {FormsModule} from "@angular/forms";

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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
