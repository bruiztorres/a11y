import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { tasksRoutes } from './tasks.routes';
import * as tasks from './';

@NgModule({
  declarations: [
    tasks.CssUnitsTaskComponent,
    tasks.CheckboxTaskComponent,
    tasks.LinksTaskComponent,
    tasks.LandmarksTaskComponent,
    tasks.SidebarTaskComponent,
    tasks.PaymentMethodTaskComponent,
    tasks.FormTaskComponent,
    tasks.SocialNetworkTaskComponent,
    tasks.ContrastColorTaskComponent,
    tasks.CommonIssuesTaskComponent
  ],
  imports: [
    tasks.RouterTaskModule,
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(tasksRoutes)
  ]
})
export class TasksModule { }
