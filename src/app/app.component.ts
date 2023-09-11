import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ulab-home';
  router: any;

  loginPage() {
    this.router.navigate(['/login']);
  }
}
