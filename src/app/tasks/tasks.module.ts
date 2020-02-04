import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { tasksRoutes } from './tasks.routes';
import * as tasks from './';

@NgModule({
  declarations: [
    tasks.CheckboxTaskComponent,
    tasks.FooterTaskComponent,
    tasks.LayoutTaskComponent,
    tasks.SidebarTaskComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(tasksRoutes)
  ]
})
export class TasksModule { }
