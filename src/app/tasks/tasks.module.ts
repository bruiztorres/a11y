import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { tasksRoutes } from './tasks.routes';
import * as tasks from './';

@NgModule({
  declarations: [
    tasks.CheckboxTaskComponent,
    tasks.FooterTaskComponent,
    tasks.LayoutTaskComponent,
    tasks.SidebarTaskComponent,
    tasks.PaymentMethodTaskComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(tasksRoutes)
  ]
})
export class TasksModule { }
