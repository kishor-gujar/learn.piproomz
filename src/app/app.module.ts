import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
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
    routingComponents,
    SidenavComponent,
    TopbarComponent,
    FooterComponent,
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
    HttpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
