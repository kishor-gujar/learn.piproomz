import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyBEFbhrGdKFgO5y02qAgoAqBHc3NUQsxo0',
    authDomain: 'piproomz-7ed24.firebaseapp.com',
    databaseURL: 'https://piproomz-7ed24.firebaseio.com',
    projectId: 'piproomz-7ed24',
    storageBucket: 'piproomz-7ed24.appspot.com',
    messagingSenderId: '1098845388678'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
