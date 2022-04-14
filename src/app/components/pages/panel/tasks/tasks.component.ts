import { Component, OnInit } from '@angular/core';
import { TASKS } from "../../../../mock-tasks";
import { ITask } from "../../../../Contracts/ITask";
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks : ITask[] = TASKS;
  constructor() { }

  ngOnInit(): void {
  }

}
