import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  isToggle: boolean = false;
  subscription: Subscription;

  constructor(private sidebarService: SidebarService) {
    this.subscription = this.sidebarService
      .onToggleSide()
      .subscribe((value) => (this.isToggle = !this.isToggle));
  }

  ngOnInit(): void {}

  onToggle() {
    this.sidebarService.toggleSide();
    console.log(this.isToggle);
  }
}
