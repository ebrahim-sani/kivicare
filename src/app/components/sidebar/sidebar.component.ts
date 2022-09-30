import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  subcription: Subscription;
  panelOpenState: boolean = false;
  isToggle: boolean = false;

  constructor(private sidebarServie: SidebarService) {
    this.subcription = this.sidebarServie
      .onToggleSide()
      .subscribe((value) => (this.isToggle = !this.isToggle));
  }

  ngOnInit(): void {}

  toggleSidebar() {
    this.sidebarServie.toggleSide();
  }
}
