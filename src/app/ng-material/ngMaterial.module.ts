import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatChipsModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const MODULES = [
  FormsModule,
  ReactiveFormsModule,
  MatSelectModule,
  MatListModule,
  MatInputModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatChipsModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class NgMaterialModule {}
