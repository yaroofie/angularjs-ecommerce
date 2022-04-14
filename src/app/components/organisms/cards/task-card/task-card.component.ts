import { Component, OnInit,Input } from '@angular/core';
import { ITask } from '../../../../Contracts/ITask';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent implements OnInit {
  @Input() task?: ITask;
  selected: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  onSelect(value: boolean) {
    this.selected = value;
  }

  onDelete (){
    console.log('delete', this.task);
  }
}
