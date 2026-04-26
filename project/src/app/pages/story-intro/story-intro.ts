import { Component } from '@angular/core';

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
}
