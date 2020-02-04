import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { TasksService } from 'src/app/tasks/tasks.service';
import { Task } from 'src/app/tasks/task.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
  public tasks$: Observable<Task[]>;

  constructor(
    private router: Router,
    private taskService: TasksService) { }

  ngOnInit() {
    this.tasks$ = this.taskService.all();
  }

  public openPath(path: string): void {
    this.router.navigateByUrl(path);
  }

  public onSearchChange(search: string) {

  /*   const formattedSearch = search.toLowerCase();

    this.tasks = linkableTasks.filter(({ title }) => {
      return title.toLowerCase().includes(formattedSearch);
    }); */
  }
}
