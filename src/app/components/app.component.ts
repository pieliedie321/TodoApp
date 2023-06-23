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

  public task: string = '';
  public taskArray: Task[] = [];

  constructor(private service: StoreTaskService) { }

  public ngOnInit(): void {
    this.taskArray = this.service.getTaskArray();
  }

  public addNewTask(): void {
    this.taskArray.unshift(new Task(this.task, false));
    this.clearTaskField();
    this.service.saveTaskArray(this.taskArray);
  }

  public deleteTask(index: number): void {
    this.taskArray.splice(index, 1);
    this.service.saveTaskArray(this.taskArray);
  }

  public updateTask(i: number): void {
    let task: Task = this.taskArray[i];
    task.isDone = !task.isDone;
    this.saveTaskArray();
  }

  public clearAllTasks(): void {
    this.taskArray = [];
    this.service.removeTaskArray();
  }

  private saveTaskArray(): void {
    this.service.saveTaskArray(this.taskArray);
  }

  private clearTaskField(): void {
    this.task = '';
  }
}