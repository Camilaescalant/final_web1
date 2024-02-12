import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  @Input() getFlag!: Boolean;
  @Output() setAll = new EventEmitter<Boolean>();
  @Output() setMy = new EventEmitter<Boolean>();

  constructor(private router: Router) {}

  setAllHeroe(flag: Boolean) {
    this.getFlag = flag;
    this.setAll.emit(flag);
  }

  setMyHeroe(flag: Boolean) {
    this.getFlag = flag;
    this.setMy.emit(flag);
  }

  redirect(){
    this.router.navigate(['./profile']);
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('idUser');
    this.router.navigate(['/login']);
  }
}
