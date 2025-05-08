import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  animations: [
    trigger('textSwitch', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('700ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('700ms ease-in', style({ transform: 'translateY(-100%)', opacity: 0 }))
      ])
    ])
  ]
})

export class UserComponent implements AfterViewInit {
  texts = ['Software Engeneer', 'Fullstack Developer', 'Mobile & Web'];
  currentIndex = 0;
  animationsEnabled = false;

  get currentText() {
    return this.texts[this.currentIndex];
  }

  
  trackByFn(index: number, item: string): string {
    return item;
  }
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setInterval(() => {
        this.animationsEnabled = true;
        this.currentIndex = (this.currentIndex + 1) % this.texts.length;
      }, 3000);
    }
  }
}
