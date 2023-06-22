import { Component, OnInit } from '@angular/core';
import { Task } from '../model/Task';
import { StoreTaskService } from '../services/StoreTasksService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StoreTaskService]
})

export class AppComponent implements OnInit {

  task: string = '';
  taskArray: Task[] = [];

  constructor(private service: StoreTaskService) { }

  ngOnInit(): void {
    this.taskArray = this.service.getTaskArray();
  }

  addNewTask(): void {
    this.taskArray.push(new Task(this.task, false));
    this.clearTaskField();
    this.service.saveTaskArray(this.taskArray);
  }

  deleteTask(index: number): void {
    this.taskArray.splice(index, 1);
    this.service.saveTaskArray(this.taskArray);
  }

  saveTaskArray(): void {
    this.service.saveTaskArray(this.taskArray);
  }

  clearAllTasks(): void {
    this.taskArray = [];
    this.service.removeTaskArray();
  }

  private clearTaskField(): void {
    this.task = '';
  }
}
