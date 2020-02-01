import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Task } from './task.model';

const tasks: Task[] = [
  { id: 1,  name: 'layout', title: 'Layout' },
  { id: 2,  name: 'sidebar', title: 'Sidebar' },
  { id: 3,  name: 'footer', title: 'Footer' },
  { id: 4,  name: 'task4', title: 'Task 4' },
  { id: 5,  name: 'task5', title: 'Task 5' },
  { id: 6,  name: 'task6', title: 'Task 6' },
  { id: 7,  name: 'task7', title: 'Task 7' },
  { id: 8,  name: 'task8', title: 'Task 8' },
  { id: 9,  name: 'task9', title: 'Task 9' },
  { id: 10, name: 'task10', title: 'Task 10' },
  { id: 11, name: 'task11', title: 'Task 11' }
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
