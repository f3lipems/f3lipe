import { Component } from '@angular/core';
import { CarroselIconsComponent } from '../carrosel-icons/carrosel-icons.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [CarroselIconsComponent, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
