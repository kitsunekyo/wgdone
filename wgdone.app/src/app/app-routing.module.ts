import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomsComponent } from './pages/rooms/rooms.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { ActivitiesComponent } from './pages/activities/activities.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'rooms',
    pathMatch: 'full'
  },
  {
    path: 'rooms',
    component: RoomsComponent
  },
  {
    path: 'rooms/:id',
    component: TasksComponent
  },
  {
    path: 'activities',
    component: ActivitiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
