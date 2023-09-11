import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  title = 'What a good App!';
  router: any;

  loginPage() {
    this.router.navigate(['/login']);
  }
}
