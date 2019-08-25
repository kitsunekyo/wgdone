import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from './ng-material/ngMaterial.module';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, RoomsComponent, TasksComponent, ActivitiesComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, NgMaterialModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
