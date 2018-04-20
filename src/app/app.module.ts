import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AfService } from './providers/af.service';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminGuard } from './guards/admin.guard';
import { SubscriberGuard } from './guards/subscriber.guard';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotifyService } from './notiy.service';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { Step4Component } from './step4/step4.component';
import { Step5Component } from './step5/step5.component';
import { Step1Chapter1Component } from './step1-chapter1/step1-chapter1.component';
import { Step1Chapter2Component } from './step1-chapter2/step1-chapter2.component';
import { Step2Chapter1Component } from './step2-chapter1/step2-chapter1.component';
import { Step2Chapter2Component } from './step2-chapter2/step2-chapter2.component';
import { Step3Chapter2Component } from './step3-chapter2/step3-chapter2.component';
import { Step3Chapter1Component } from './step3-chapter1/step3-chapter1.component';
import { Step4Chapter1Component } from './step4-chapter1/step4-chapter1.component';
import { Step4Chapter2Component } from './step4-chapter2/step4-chapter2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    routingComponents,
    SidenavComponent,
    AdminPageComponent,
    TopbarComponent,
    FooterComponent,
    HomePageComponent,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
    Step1Chapter1Component,
    Step1Chapter2Component,
    Step2Chapter1Component,
    Step2Chapter2Component,
    Step3Chapter2Component,
    Step3Chapter1Component,
    Step4Chapter1Component,
    Step4Chapter2Component,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AngularFirestoreModule
  ],
  providers: [AfService, AdminGuard, SubscriberGuard, NotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
