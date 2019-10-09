import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgMaterialModule } from './ng-material/ngMaterial.module';
import { TasksComponent } from './pages/tasks/tasks.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LoginComponent } from './pages/login/login.component';
import { TaskSubmitComponent } from './pages/task-submit/task-submit.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { MyActivitiesComponent } from './pages/my-activities/my-activities.component';
import { ConfirmationDialogComponent } from './dialogs/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    UserProfileComponent,
    LoginComponent,
    TaskSubmitComponent,
    ActivitiesComponent,
    TaskListComponent,
    ActivityListComponent,
    PageTitleComponent,
    DateAgoPipe,
    LoadingOverlayComponent,
    MyActivitiesComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [ConfirmationDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
