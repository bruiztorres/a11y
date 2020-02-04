import { Routes } from '@angular/router';

import * as tasks from '.';

export const tasksRoutes: Routes = [
  {
    path: 'task',
    children: [
      { path: 'checkbox', component: tasks.CheckboxTaskComponent },
      { path: 'payment-method', component: tasks.PaymentMethodTaskComponent },
      { path: 'footer', component: tasks.FooterTaskComponent },
      { path: 'layout', component: tasks.LayoutTaskComponent },
      { path: 'sidebar', component: tasks.SidebarTaskComponent }
    ]
  }
]

