import { Component } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';
import { CalendarStat } from 'src/app/model';
@Component({
  selector: 'app-stat-table',
  templateUrl: './stat-table.component.html',
  styleUrls: ['./stat-table.component.css'],
})
export class StatTableComponent {
  constructor(private calendarService: CalendarService) {}
  displayedColumns: string[] = ['year', 'count', 'totalEffort'];
  dataSource: CalendarStat[] = [];

  ngOnInit() {
    this.dataSource = this.calendarService.getCalendarStat();
  }
}
