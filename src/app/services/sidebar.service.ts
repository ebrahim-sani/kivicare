import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private toggleSideBar: boolean = false;
  private sideBarEmitter = new Subject<boolean>();

  constructor() {}

  toggleSide(): void {
    this.toggleSideBar = !this.toggleSideBar;
    this.sideBarEmitter.next(this.toggleSideBar);
  }

  onToggleSide(): Observable<any> {
    return this.sideBarEmitter.asObservable();
  }
}
