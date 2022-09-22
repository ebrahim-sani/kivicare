import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  toggle: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onToggle() {
    this.toggle = !this.toggle;
  }
}
