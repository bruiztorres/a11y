import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as directives from './directives';

const sharedDirectives = [
  directives.FocusDirective
]

@NgModule({
  declarations: [
    ...sharedDirectives
  ],
  exports: [
    ...sharedDirectives
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
