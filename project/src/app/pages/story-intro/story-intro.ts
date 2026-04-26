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

  protected readonly slides: StorySlide[] = [
    {
      title: 'Сереброзубая Пампалче',
      region: 'Республика Марий Эл',
      description:
        'Сказка повествует о смелой девочке по имени Сереброзубая Пампалче. Её жизнь захватывающая и интересная. Сегодня вы с ней познакомитесь через образовательную игру.',
      action: 'Начать игру',
      background: '/assets/story/fon1.jpg',
      character: '/assets/story/tolka.png',
      symbol: '/assets/story/mari-symbol.png',
    },
  ];

  @HostListener('wheel', ['$event'])
  protected onWheel(event: WheelEvent): void {
    event.preventDefault();

    if (Math.abs(event.deltaY) < 8) {
      return;
    }

    const direction = event.deltaY > 0 ? 1 : -1;
    this.activeSlideIndex = Math.min(Math.max(this.activeSlideIndex + direction, 0), this.slides.length);
  }
}
