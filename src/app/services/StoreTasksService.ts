import { Injectable } from "@angular/core";
import { Task } from "../model/Task";

@Injectable({
    providedIn: 'root',
})
export class StoreTaskService {
    private TASK_ARRAY: string = 'taskList';

    getTaskArray(): Task[] {
        return JSON.parse(localStorage.getItem(this.TASK_ARRAY) ?? '[]');
    }

    saveTaskArray(taskArray: Task[]): void {
        localStorage.setItem(this.TASK_ARRAY, JSON.stringify(taskArray))
    }

    removeTaskArray() {
        localStorage.removeItem(this.TASK_ARRAY);
    }
}