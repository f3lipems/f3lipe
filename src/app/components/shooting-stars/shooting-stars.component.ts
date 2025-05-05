import { AfterViewInit, Component, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-shooting-stars',
  imports: [CommonModule],
  templateUrl: './shooting-stars.component.html',
  styleUrl: './shooting-stars.component.css'
})
export class ShootingStarsComponent implements AfterViewInit {
  @ViewChild('starCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private stars: any[] = [];

  public isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    this.initAnimation();
  }

  initAnimation() {
    if (this.isBrowser) {
      const canvas = this.canvasRef!.nativeElement;
      this.ctx = canvas.getContext('2d')!;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Resize handler
      window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });

      this.generateStars();
      this.animate();
    }
  }

  generateStars() {
    setInterval(() => {
      const x = Math.random() * (window.innerWidth * 3) - window.innerWidth;
      const y = 0;
      const length = 10 + Math.random() * 100;
      const speed = 1 + Math.random() * 4;
      const angle = Math.PI / 4;

      this.stars.push({ x, y, length, speed, angle });
    }, 500);
  }

  animate = () => {
    requestAnimationFrame(this.animate);
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    this.stars.forEach((star, index) => {
      const dx = Math.cos(star.angle) * star.speed;
      const dy = Math.sin(star.angle) * star.speed;
      star.x += dx;
      star.y += dy;

      this.ctx.strokeStyle = 'white';
      this.ctx.lineWidth = 0.1;
      this.ctx.beginPath();
      this.ctx.moveTo(star.x, star.y);
      this.ctx.lineTo(star.x - Math.cos(star.angle) * star.length, star.y - Math.sin(star.angle) * star.length);
      this.ctx.stroke();

      // Remove estrela quando sair da tela
      if (star.x > window.innerWidth || star.y > window.innerHeight) {
        this.stars.splice(index, 1);
      }
    });
  };
}
