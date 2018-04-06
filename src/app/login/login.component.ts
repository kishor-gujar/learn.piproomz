import { Component, OnInit } from '@angular/core';
import { AfService } from '../providers/af.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public afService: AfService) {

  }

  ngOnInit() {
  }

  login() {
   this.afService.loginWithGoogle();
  }
}
