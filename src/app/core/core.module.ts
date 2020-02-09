import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import * as components from './layout';

const layoutComponents = [
  components.FooterComponent,
  components.HeaderComponent,
  components.SidebarComponent,
];

@NgModule({
  declarations: [
    ...layoutComponents
  ],
  exports: [
    ...layoutComponents
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class CoreModule { }
