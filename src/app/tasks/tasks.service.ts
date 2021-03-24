import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Task } from './task.model';

const tasks: Task[] = [
  { id: 0, name: 'landmarks', title: 'Landmarks' },
  { id: 1, name: 'css-units', title: 'CSS units' },
  { id: 2, name: 'contrast-color', title: 'Contrast color' },
  { id: 3, name: 'links', title: 'Links' },
  { id: 4, name: 'social-network', title: 'Social networks' },
  { id: 5, name: 'sidebar', title: 'Sidebar' },
  { id: 6, name: 'checkbox', title: 'Checkbox' },
  { id: 7, name: 'routing', title: 'Routing' },
  { id: 8, name: 'form', title: 'Form' },
  { id: 9, name: 'common-issues', title: 'Common issues' }
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
