import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Task } from './task.model';

const tasks: Task[] = [
  { id: 0,  name: 'checkbox', title: 'Checkbox' },
  { id: 1,  name: 'layout', title: 'Layout' },
  { id: 2,  name: 'sidebar', title: 'Sidebar' },
  { id: 3,  name: 'links', title: 'Links' },
  { id: 4,  name: 'social-network', title: 'Social Network' },
  { id: 5,  name: 'payment-method', title: 'Payment Method' },
  { id: 6,  name: 'routing', title: 'Routing' },
  { id: 7,  name: 'form', title: 'Form' }
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
    const task = tasks.find(t => t.id === id);
    return of(task);
  }
}
