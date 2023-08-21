import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  today: Date = new Date();
  startDay!: number;
  monthNames: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  weekDays: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  daysInMonth!: number;
  daysArray: number[] = [];
  restDays: number[] = [6, 7]; // Assuming Saturday and Sunday are days of rest

  constructor() { }

  ngOnInit(): void {
    this.startDay = new Date(this.today.getFullYear(), this.today.getMonth(), 1).getDay();
    this.daysInMonth = new Date(this.today.getFullYear(), this.today.getMonth() + 1, 0).getDate();

    for (let i = 1; i <= this.daysInMonth; i++) {
      this.daysArray.push(i);
    }
  }

  isRestDay(day: number): boolean {
    const dayOfWeek = (this.startDay + day - 1) % 7; // Adjusted calculation
    console.log(`Day: ${day}, Day of Week: ${dayOfWeek}`);
    return dayOfWeek === 0 || dayOfWeek === 6; // Sunday or Saturday
  }


  isToday(day: number): boolean {
    return this.today.getDate() === day;
  }
}
