import { Routes } from '@angular/router';

import * as tasks from '.';

export const tasksRoutes: Routes = [
  {
    path: 'task',
    children: [
      { path: 'checkbox', component: tasks.CheckboxTaskComponent },
      { path: 'form', component: tasks.FormTaskComponent },
      { path: 'payment-method', component: tasks.PaymentMethodTaskComponent },
      { path: 'links', component: tasks.LinksTaskComponent },
      { path: 'social-network', component: tasks.SocialNetworkTaskComponent },
      { path: 'layout', component: tasks.LayoutTaskComponent },
      { path: 'sidebar', component: tasks.SidebarTaskComponent }
    ]
  }
];

