import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor() {}

  ngOnInit(): void {}

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Email field is empty';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
