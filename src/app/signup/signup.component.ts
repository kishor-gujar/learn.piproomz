import { Component, OnInit, trigger } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AfService } from '../providers/af.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  detailForm: FormGroup;

  constructor(public fb: FormBuilder, public auth: AfService) { }

  ngOnInit() {
    // First Setp
    this.signupForm = this.fb.group({
      'email': ['', [
        Validators.required,
        Validators.email
      ]
    ],
    'password': ['', [
        Validators.minLength(6),
        Validators.maxLength(25),
        Validators.required 
    ]]});

    // second step
      this.detailForm = this.fb.group({
        'name': ['', [
          Validators.required
        ]],
        'phone': ['', [
          Validators.required
        ]],
        'age': ['', [
          Validators.required
        ]],
        'full_address': ['', [
          Validators.required
        ]],
        'street_name': ['', [
          Validators.required
        ]],
        'city': ['', [
          Validators.required
        ]],
        'country': ['', [
          Validators.required
        ]],
        'postal': ['', [
          Validators.required
        ]]
      });
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
  }
  get email() { return this.signupForm.get('email') }
  get password() { return this.signupForm.get('password') }
  
  get name() { return this.detailForm.get('name') }
  get phone() { return this.detailForm.get('phone') }
  get age() { return this.detailForm.get('age') }
  get full_address() { return this.detailForm.get('full_address') }
  get street_name() { return this.detailForm.get('street_name') }
  get city() { return this.detailForm.get('city') }
  get country() { return this.detailForm.get('country') }
  get postal() { return this.detailForm.get('postal') }
  
  // setp 1
  signup() {
    return this.auth.emailSignup(this.email.value, this.password.value)
  }

  // Setp 2 
  setDetails(user) {
    return this.auth.updateUser(user, {
      displayName: this.name.value,
      phone: this.phone.value,
      age: this.age.value,
      address: {
        full_addres: this.full_address.value,
        street_name: this.street_name.value,
        city: this.city.value,
        country: this.country.value,
        postal: this.postal.value
      }
    })
  }
}

