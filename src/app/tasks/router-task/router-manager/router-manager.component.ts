import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-router-manager',
  template: '<router-outlet></router-outlet>'
})
export class RouterManagerComponent implements OnDestroy {
  private destroyed$ = new Subject();

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      // NOTE: Filter for fixing routing in this
      // specific task not needed in case you want
      // to fix the routing globally
      filter((event: NavigationEnd) => event.url.startsWith('/task/routing')),
      takeUntil(this.destroyed$)
    ).subscribe(this.setFocusInFirstHeading);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  private setFocusInFirstHeading(): void {
    const heading = document.querySelector('main h1') as HTMLElement;

    if (!heading) {
      return;
    }

    heading.setAttribute('tabindex', '-1');
    heading.focus();
  }
}
