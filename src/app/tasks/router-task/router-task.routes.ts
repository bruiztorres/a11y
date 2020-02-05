import { Routes } from '@angular/router';

import { RouterManagerComponent } from './router-manager/router-manager.component';
import * as steps from '.';

export const routingTaskRoutes: Routes = [
  {
    path: 'task/routing',
    component: RouterManagerComponent,
    children: [
      { path:'', redirectTo: 'step-1', pathMatch: 'full' },
      { path: 'step-1', component: steps.Step1RouterTaskComponent },
      { path: 'step-2', component: steps.Step2RouterTaskComponent },
      { path: 'step-3', component: steps.Step3RouterTaskComponent }
    ]
  }
]
