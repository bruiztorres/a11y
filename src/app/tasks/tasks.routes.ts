import { Routes } from '@angular/router';

import * as tasks from '.';

export const tasksRoutes: Routes = [
  {
    path: 'task',
    children: [
      { path: 'form', component: tasks.FormTaskComponent },
      { path: 'links', component: tasks.LinksTaskComponent },
      { path: 'sidebar', component: tasks.SidebarTaskComponent },
      { path: 'checkbox', component: tasks.CheckboxTaskComponent },
      { path: 'css-units', component: tasks.CssUnitsTaskComponent },
      { path: 'landmarks', component: tasks.LandmarksTaskComponent },
      { path: 'payment-method', component: tasks.PaymentMethodTaskComponent },
      { path: 'social-network', component: tasks.SocialNetworkTaskComponent },
      { path: 'contrast-color', component: tasks.ContrastColorTaskComponent },
      { path: 'common-issues', component: tasks.CommonIssuesTaskComponent }
    ]
  }
];

