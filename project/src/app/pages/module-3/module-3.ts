import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type ContentKey = 'crossword' | 'practice' | 'feedback';

interface ContentSection {
  title: string;
  text?: string;
  items: string[];
}

interface FeedbackConfig {
  title: string;
  placeholder: string;
  submitLabel: string;
  withFile: boolean;
}

interface CrosswordEntry {
  number: number;
  clue: string;
  answer: string;
}

interface ModuleContent {
  title: string;
  text: string;
  items: string[];
  sections?: ContentSection[];
  crossword?: CrosswordEntry[];
  note?: string;
  feedback?: FeedbackConfig;
}

@Component({
  selector: 'app-module-3',
  imports: [RouterLink],
  templateUrl: './module-3.html',
  styleUrl: './module-3.scss',
})
export class Module3Component {
  isVideoPlaying = false;
  activeContent: ModuleContent | null = null;
  isFeedbackSent = false;
  crosswordScore: number | null = null;

  private readonly content: Record<ContentKey, ModuleContent> = {
    crossword: {
      title: 'Интерактивный кроссворд',
      text: 'Кроссворд помогает вспомнить сюжет сказки и проверить умение работать сообща.',
      items: [
        'Ответьте на 13 вопросов по сказке.',
        'Используйте подсказки в виде иллюстраций, фотографий и зашифрованных слов.',
        'Обсуждайте варианты всей командой.',
        'Отмечайте, какие семейные ценности помогали вам договориться.',
      ],
      sections: [
        {
          title: 'Правила работы',
          items: [
            'Читайте вопрос вслух и обсуждайте не больше двух вариантов ответа.',
            'Используйте иллюстрации и фотографии как подсказки.',
            'Если ответ спорный, найдите в сказке эпизод, который поможет решить.',
            'Записывайте ответы аккуратно, чтобы все члены команды видели ход решения.',
          ],
        },
        {
          title: 'Что развивает задание',
          items: [
            'Знание сюжета сказки.',
            'Смекалку и интуицию.',
            'Умение слушать друг друга.',
            'Уважительное обсуждение разных версий.',
          ],
        },
      ],
      crossword: [
        {
          number: 1,
          clue: 'Главная героиня марийской сказки.',
          answer: 'ПАМПАЛЧЕ',
        },
        {
          number: 2,
          clue: 'Близкие люди, ради которых героиня проявляет заботу.',
          answer: 'СЕМЬЯ',
        },
        {
          number: 3,
          clue: 'Качество, которое помогает Пампалче защищать близких.',
          answer: 'СМЕЛОСТЬ',
        },
        {
          number: 4,
          clue: 'Семейная ценность, когда участники помогают друг другу.',
          answer: 'ВЗАИМОПОМОЩЬ',
        },
        {
          number: 5,
          clue: 'Отношение к старшему поколению, которое важно сохранять.',
          answer: 'УВАЖЕНИЕ',
        },
        {
          number: 6,
          clue: 'Теплое отношение и внимание к близким.',
          answer: 'ЗАБОТА',
        },
      ],
      note: 'Задачи: знания о сюжете, интуиция, смекалка, командная работа и взаимопомощь.',
    },
    practice: {
      title: 'Практическое задание',
      text: 'Представьте, что Пампалче приехала к вам в город.',
      items: [
        'Какие достопримечательности вы могли бы ей показать?',
        'Что интересного она узнала бы о вашем городе?',
        'Чем вы могли бы ее удивить?',
        'Подготовьте ответ и фотографии для обратной связи.',
      ],
      sections: [
        {
          title: 'План ответа',
          items: [
            'Выберите 2-3 места в вашем городе или поселке.',
            'Объясните, почему эти места важны для семьи или культуры.',
            'Придумайте маршрут прогулки для Пампалче.',
            'Добавьте семейную фотографию или фото выбранного места.',
          ],
        },
        {
          title: 'Вопросы для обсуждения',
          items: [
            'Что в вашем городе связано с историей семьи?',
            'Какое место лучше всего показывает доброту и гостеприимство?',
            'Что Пампалче могла бы рассказать о своем народе в ответ?',
          ],
        },
      ],
      feedback: {
        title: 'Отправить маршрут для Пампалче',
        placeholder: 'Опишите, какие места вы выбрали и почему именно их показали бы героине.',
        submitLabel: 'Отправить ответ',
        withFile: true,
      },
    },
    feedback: {
      title: 'Впечатления и отзыв',
      text: 'В конце модуля участники делятся впечатлениями о совместной работе.',
      items: [
        'Что получилось лучше всего?',
        'Кто какую помощь оказал команде?',
        'Какой вопрос кроссворда был самым интересным?',
      ],
      sections: [
        {
          title: 'Формат отзыва',
          items: [
            'Одно предложение от ребенка: что было самым интересным.',
            'Одно предложение от взрослого: как команда работала вместе.',
            'Одна семейная ценность, которую вы заметили во время игры.',
          ],
        },
        {
          title: 'Можно приложить',
          items: [
            'Фото команды за кроссвордом.',
            'Фото заполненного задания.',
            'Короткий комментарий о впечатлениях.',
          ],
        },
      ],
      note: 'Ответ можно отправить с фотографиями по ссылке обратной связи или в сообщество ВКонтакте.',
      feedback: {
        title: 'Оставить отзыв',
        placeholder: 'Поделитесь впечатлениями: что понравилось, что было сложным, как вы помогали друг другу.',
        submitLabel: 'Отправить отзыв',
        withFile: true,
      },
    },
  };

  openContent(key: ContentKey): void {
    this.activeContent = this.content[key];
    this.isFeedbackSent = false;
    this.crosswordScore = null;
  }

  closeContent(): void {
    this.activeContent = null;
    this.isFeedbackSent = false;
    this.crosswordScore = null;
  }

  submitFeedback(event: SubmitEvent): void {
    event.preventDefault();
    this.isFeedbackSent = true;
  }

  submitCrossword(event: SubmitEvent): void {
    event.preventDefault();

    if (!this.activeContent?.crossword) {
      return;
    }

    const formData = new FormData(event.target as HTMLFormElement);
    this.crosswordScore = this.activeContent.crossword.reduce((score, entry) => {
      const value = String(formData.get(`word-${entry.number}`) ?? '')
        .trim()
        .toUpperCase()
        .replaceAll('Ё', 'Е')
        .replaceAll(' ', '');
      return score + (value === entry.answer ? 1 : 0);
    }, 0);
  }

  openAndPlayVideo(
    toggle: HTMLInputElement,
    video: HTMLVideoElement,
    event: MouseEvent,
  ): void {
    event.preventDefault();
    event.stopPropagation();
    toggle.checked = true;
    this.playVideo(video);
  }

  private playVideo(video: HTMLVideoElement): void {
    void video.play().catch(() => undefined);
  }

  pauseVideo(video: HTMLVideoElement): void {
    video.pause();
    this.isVideoPlaying = false;
  }

  toggleVideoPlayback(video: HTMLVideoElement, event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();

    if (video.paused) {
      void video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }
}
