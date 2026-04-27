import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

type StorySlide = {
  title: string;
  region: string;
  description: string;
  action: string;
  background: string;
  character: string;
  symbol: string;
};

type NavControl = {
  direction: -1 | 1;
  label: string;
  icon: '↑' | '↓';
};

@Component({
  selector: 'app-story-intro',
  imports: [RouterLink],
  templateUrl: './story-intro.html',
  styleUrl: './story-intro.scss',
})
export class StoryIntro {
  private static readonly LOCK_TIMEOUT_MS = 720;
  private static readonly WHEEL_THRESHOLD = 8;
  private static readonly SWIPE_THRESHOLD = 36;

  protected activeSlideIndex = 0;
  private isWheelLocked = false;
  private touchStartY: number | null = null;

  protected readonly navControls: readonly NavControl[] = [
    { direction: -1, label: 'Перейти к предыдущему экрану', icon: '↑' },
    { direction: 1, label: 'Перейти к следующему экрану', icon: '↓' },
  ];

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

    if (this.isWheelLocked || Math.abs(event.deltaY) < StoryIntro.WHEEL_THRESHOLD) {
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

    if (event.key === 'ArrowDown' || event.key === 'PageDown' || event.key === ' ') {
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

    if (Math.abs(deltaY) < StoryIntro.SWIPE_THRESHOLD) {
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
    }, StoryIntro.LOCK_TIMEOUT_MS);
  }

  protected get canScrollUp(): boolean {
    return this.activeSlideIndex > 0;
  }

  protected get canScrollDown(): boolean {
    return this.activeSlideIndex < this.slides.length;
  }
}
