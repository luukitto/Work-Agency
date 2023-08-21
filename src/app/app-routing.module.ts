import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {FormatDataComponent} from "./format-data/format-data.component";
import {TextComparisonComponent} from "./text-comparision/text-comparision.component";
import {CalendarComponent} from "./calendar/calendar.component";



const routes: Routes = [
  { path: '', redirectTo: '/calendar', pathMatch: 'full' },
  { path: 'calendar', component: CalendarComponent },
  { path: 'format', component: FormatDataComponent },
  { path: 'comparision', component: TextComparisonComponent },
  // Add other routes as needed
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
