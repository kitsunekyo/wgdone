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

@NgModule({
  declarations: [AppComponent, TasksComponent, UserProfileComponent, LoginComponent, TaskSubmitComponent],
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
