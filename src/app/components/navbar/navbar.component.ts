import { Component, Input } from '@angular/core';
import { UserComponent } from "../user/user.component";

@Component({
  selector: 'app-navbar',
  imports: [UserComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  @Input() toggleSidenav!: () => void;
}
