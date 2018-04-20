import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminGuard } from './guards/admin.guard';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupComponent } from './signup/signup.component';
import { Step5Component } from './step5/step5.component';
import { Step1Chapter1Component } from './step1-chapter1/step1-chapter1.component';
import { Step1Chapter2Component } from './step1-chapter2/step1-chapter2.component';
import { Step2Chapter1Component } from './step2-chapter1/step2-chapter1.component';
import { Step2Chapter2Component } from './step2-chapter2/step2-chapter2.component';
import { Step3Chapter1Component } from './step3-chapter1/step3-chapter1.component';
import { Step3Chapter2Component } from './step3-chapter2/step3-chapter2.component';
import { Step4Chapter1Component } from './step4-chapter1/step4-chapter1.component';
import { Step4Chapter2Component } from './step4-chapter2/step4-chapter2.component';

const routes: Routes = [
  { path: '', component: Step1Chapter1Component },
  { path: 'step1/chapter2', component: Step1Chapter2Component },
  { path: 'step2/chapter1', component: Step2Chapter1Component },
  { path: 'step2/chapter2', component: Step2Chapter2Component },
  { path: 'step3/chapter1', component: Step3Chapter1Component },
  { path: 'step3/chapter2', component: Step3Chapter2Component },
  { path: 'step4/chapter1', component: Step4Chapter1Component },
  { path: 'step4/chapter2', component: Step4Chapter2Component },
  { path: 'step5', component: Step5Component },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin', component: AdminPageComponent, canActivate: [AdminGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [LoginComponent];
