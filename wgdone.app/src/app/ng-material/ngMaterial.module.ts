import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule
} from '@angular/material';

const MODULES = [MatSidenavModule, MatButtonModule, MatIconModule, MatToolbarModule, MatListModule];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class NgMaterialModule {}
