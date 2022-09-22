import { Component } from '@angular/core';
import { faBlenderPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  faBlenderPhone = faBlenderPhone;
  title = 'Health Care Management';
}
