import { Routes } from '@angular/router';

import * as tasks from '.';

export const tasksRoutes: Routes = [
  {
    path: 'task',
    children: [
      { path: 'footer', component: tasks.FooterTaskComponent },
      { path: 'layout', component: tasks.LayoutTaskComponent },
      { path: 'sidebar', component: tasks.SidebarTaskComponent }
    ]
  }
]

