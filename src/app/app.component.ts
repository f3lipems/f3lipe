import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { HeaderComponent } from '../app/components/header/header.component';
import { FooterComponent } from '../app/components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
