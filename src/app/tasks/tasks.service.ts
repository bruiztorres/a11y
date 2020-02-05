import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Task } from './task.model';

const tasks: Task[] = [
  { id: 0,  name: 'checkbox', title: 'Checkbox' },
  { id: 1,  name: 'layout', title: 'Layout' },
  { id: 2,  name: 'sidebar', title: 'Sidebar' },
  { id: 3,  name: 'links', title: 'Links' },
  { id: 3,  name: 'social-network', title: 'Social Network' },
  { id: 4,  name: 'video', title: 'Video' },
  { id: 5,  name: 'payment-method', title: 'Payment Method' },
  { id: 6,  name: 'form', title: 'Form' },
  { id: 7,  name: 'routing', title: 'Routing' },
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
