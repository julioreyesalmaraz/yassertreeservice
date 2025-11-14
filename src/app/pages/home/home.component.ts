import { ChangeDetectorRef, Component, HostListener, NgZone } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

interface Slide {
  img: string;
  alt: string;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  slides: Slide[] = [
    { img: 'assets/img/img1.jpg', alt: 'Árbol 1' },
    { img: 'assets/img/img2.jpeg', alt: 'Árbol 2' },
    { img: 'assets/img/img3.jpeg', alt: 'Árbol 3' },
    { img: 'assets/img/img4.jpeg', alt: 'Árbol 4' },
    { img: 'assets/img/img5.jpeg', alt: 'Árbol 5' },
    { img: 'assets/img/img6.jpeg', alt: 'Árbol 6' },
    { img: 'assets/img/img7.jpeg', alt: 'Árbol 7' },
    { img: 'assets/img/img8.jpeg', alt: 'Árbol 8' },
    { img: 'assets/img/img9.jpeg', alt: 'Árbol 9' },
    { img: 'assets/img/img10.jpeg', alt: 'Árbol 10' },
    { img: 'assets/img/img11.jpeg', alt: 'Árbol 11' },
    { img: 'assets/img/img12.jpeg', alt: 'Árbol 12' },
    { img: 'assets/img/img13.jpeg', alt: 'Árbol 13' },
    { img: 'assets/img/img14.jpeg', alt: 'Árbol 14' },
  ];

  selectedIndex = 0;
  intervalId: any;

  private touchStartX = 0;
  private touchEndX = 0;

  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    setTimeout(() => this.startAutoSlide(), 0);
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => {
          this.next();
          this.cdr.detectChanges();
        });
      }, 3000);
    });
  }

  stopAutoSlide() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  next() {
    this.selectedIndex = (this.selectedIndex + 1) % this.slides.length;
  }

  prev() {
    this.selectedIndex =
      (this.selectedIndex - 1 + this.slides.length) % this.slides.length;
  }

  goTo(index: number) {
    this.selectedIndex = index;
    this.cdr.detectChanges();
  }

  // Swipe táctil
  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  handleSwipe() {
    const distance = this.touchEndX - this.touchStartX;
    if (Math.abs(distance) > 50) { // mínimo swipe
      if (distance > 0) {
        this.prev();
      } else {
        this.next();
      }
      this.cdr.detectChanges();
    }
  }
}
