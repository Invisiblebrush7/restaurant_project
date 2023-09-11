import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  hide = true;
  username = '';
  pass = '';

  constructor(private router: Router) {}

  login() {
    console.log(this.username, this.pass);
    if (this.username === '' && this.pass === '') {
      console.log('entro');
      this.router.navigate(['/inside']);
    }
  }
}
