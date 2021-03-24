import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, map, tap } from 'rxjs/operators';

import { TasksService } from 'src/app/tasks/tasks.service';
import { Task } from 'src/app/tasks/task.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
  public searchTerm$ = new BehaviorSubject<string>('');
  public filteredTasks$: Observable<Task[]>;
  public loading = false;

  private tasks$: Observable<Task[]>;

  constructor(
    private router: Router,
    private taskService: TasksService) { }

  ngOnInit() {
    this.tasks$ = this.taskService.all();

    this.filteredTasks$ = this.searchTerm$.pipe(
      distinctUntilChanged(),
      tap(() => this.loading = true),
      debounceTime(300),
      switchMap(this.searchTasks.bind(this)),
      tap(() => this.loading = false),
    );
  }

  public openPath(path: string): void {
    this.router.navigateByUrl(path);
  }

  public trackByTask(_: number, item: Task): number {
    return item.id;
  }

  private searchTasks(searchTerm: string): Observable<Task[]> {
    if (!searchTerm) {
      return this.tasks$;
    }

    searchTerm = searchTerm.toLowerCase();

    return this.tasks$.pipe(
      map((tasks: Task[]) => tasks.filter((task: Task) =>
        task.name.toLowerCase().indexOf(searchTerm) > -1
      ))
    );
  }
}
