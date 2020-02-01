import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as components from './layout';

const layoutComponents = [
  components.FooterComponent,
  components.HeaderComponent,
  components.SidebarComponent,
]

@NgModule({
  declarations: [
    ...layoutComponents
  ],
  exports: [
    ...layoutComponents
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
