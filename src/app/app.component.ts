import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';

// Components
import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { HeaderComponent } from '../app/components/header/header.component';
import { UserComponent } from '../app/components/user/user.component';
import { ShootingStarsComponent } from './components/shooting-stars/shooting-stars.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatSidenavModule,
    NavbarComponent,
    HeaderComponent,
    UserComponent,
    ShootingStarsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild(MatDrawer) drawer!: MatDrawer;

  async toggleSidenav() {
    await this.drawer.toggle();
  }
}
