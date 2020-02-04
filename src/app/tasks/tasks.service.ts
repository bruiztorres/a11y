import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Task } from './task.model';

const tasks: Task[] = [
  { id: 0,  name: 'checkbox', title: 'Checkbox' },
  { id: 1,  name: 'payment-method', title: 'Payment Method' },
  { id: 2,  name: 'layout', title: 'Layout' },
  { id: 3,  name: 'sidebar', title: 'Sidebar' },
  { id: 4,  name: 'footer', title: 'Footer' },
  { id: 5,  name: 'video', title: 'Video' },
  { id: 6,  name: 'images', title: 'Images' },
  { id: 7,  name: 'form', title: 'Form' },
  { id: 8,  name: 'fields', title: 'Fields' },
  { id: 9,  name: 'task8', title: 'Checkbox' },
  { id: 10,  name: 'task9', title: 'Payment method' },
  { id: 11, name: 'task10', title: 'Task 10' },
  { id: 12, name: 'task11', title: 'Task 11' }
];

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  public all(): Observable<Task[]> {
    return of(tasks);
  }

  public get(id: number): Observable<Task> {
    const task = tasks.find(task => task.id === id);
    return of(task)
  }
}
