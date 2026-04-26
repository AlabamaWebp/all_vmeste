import { Component, HostListener } from '@angular/core';

type StorySlide = {
  title: string;
  region: string;
  description: string;
  action: string;
  background: string;
  character: string;
  symbol: string;
};

@Component({
  selector: 'app-story-intro',
  templateUrl: './story-intro.html',
  styleUrl: './story-intro.scss',
})
export class StoryIntro {
  protected activeSlideIndex = 0;
  private isWheelLocked = false;
  private touchStartY: number | null = null;

  protected readonly slides: StorySlide[] = [
    {
      title: 'Сереброзубая Пампалче',
      region: 'Республика Марий Эл',
      description:
        'Сказка повествует о смелой девочке по имени Сереброзубая Пампалче. Её жизнь захватывающая и интересная. Сегодня вы с ней познакомитесь через образовательную игру.',
      action: 'Начать игру',
      background: '/assets/story/fon1.jpg',
      character: '/assets/story/tolka.png',
      symbol: '/assets/story/znak.png',
    },
  ];

  @HostListener('wheel', ['$event'])
  protected onWheel(event: WheelEvent): void {
    event.preventDefault();

    if (this.isWheelLocked || Math.abs(event.deltaY) < 8) {
      return;
    }

    this.scrollBy(event.deltaY > 0 ? 1 : -1);
  }

  @HostListener('window:keydown', ['$event'])
  protected onKeydown(event: KeyboardEvent): void {
    const target = event.target as HTMLElement | null;
    if (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) {
      return;
    }

    if (event.key === 'ArrowDown' || event.key === 'PageDown' || event.key === ' ' || event.key === 'Spacebar') {
      event.preventDefault();
      this.scrollBy(1);
    }

    if (event.key === 'ArrowUp' || event.key === 'PageUp') {
      event.preventDefault();
      this.scrollBy(-1);
    }
  }

  @HostListener('touchstart', ['$event'])
  protected onTouchStart(event: TouchEvent): void {
    if (event.touches.length !== 1) {
      this.touchStartY = null;
      return;
    }

    this.touchStartY = event.touches[0].clientY;
  }

  @HostListener('touchend', ['$event'])
  protected onTouchEnd(event: TouchEvent): void {
    if (this.touchStartY === null || event.changedTouches.length !== 1) {
      this.touchStartY = null;
      return;
    }

    const deltaY = this.touchStartY - event.changedTouches[0].clientY;
    this.touchStartY = null;

    if (Math.abs(deltaY) < 36) {
      return;
    }

    this.scrollBy(deltaY > 0 ? 1 : -1);
  }

  protected scrollBy(direction: -1 | 1): void {
    if (this.isWheelLocked) {
      return;
    }

    const nextIndex = Math.min(Math.max(this.activeSlideIndex + direction, 0), this.slides.length);
    if (nextIndex === this.activeSlideIndex) {
      return;
    }

    this.activeSlideIndex = nextIndex;
    this.isWheelLocked = true;
    window.setTimeout(() => {
      this.isWheelLocked = false;
    }, 720);
  }

  protected get canScrollUp(): boolean {
    return this.activeSlideIndex > 0;
  }

  protected get canScrollDown(): boolean {
    return this.activeSlideIndex < this.slides.length;
  }
}
