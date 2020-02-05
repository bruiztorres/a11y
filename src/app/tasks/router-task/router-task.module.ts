import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RouterManagerComponent } from './router-manager/router-manager.component';
import { routingTaskRoutes } from './router-task.routes';
import * as steps from './';

@NgModule({
  declarations: [
    steps.Step1RouterTaskComponent,
    steps.Step2RouterTaskComponent,
    steps.Step3RouterTaskComponent,
    RouterManagerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routingTaskRoutes)

  ]
})
export class RouterTaskModule { }
