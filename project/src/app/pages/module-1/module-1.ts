import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type ContentKey = 'test' | 'practice' | 'story';

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

interface NoticeConfig {
  text: string;
  actionLabel: string;
}

interface TestQuestion {
  prompt: string;
  options: string[];
  correctIndex: number;
}

interface ModuleContent {
  title: string;
  text: string;
  items: string[];
  sections?: ContentSection[];
  notice?: NoticeConfig;
  testQuestions?: TestQuestion[];
  note?: string;
  feedback?: FeedbackConfig;
}

@Component({
  selector: 'app-module-1',
  imports: [RouterLink],
  templateUrl: './module-1.html',
  styleUrl: './module-1.scss',
})
export class Module1Component {
  isVideoPlaying = false;
  activeContent: ModuleContent | null = null;
  isFeedbackSent = false;
  isTestStarted = false;
  testScore: number | null = null;

  private readonly content: Record<ContentKey, ModuleContent> = {
    test: {
      title: 'Тест по сказке',
      text: 'После буктрейлера участники проходят небольшой тест и обсуждают, как поступки героев связаны с семейными ценностями.',
      items: [
        'Сначала посмотрите буктрейлер.',
        'Затем нажмите кнопку запуска теста в уведомлении.',
        'Выберите один ответ в каждом вопросе.',
        'После проверки обсудите ответы всей семьей.',
      ],
      notice: {
        text: 'Тест откроется после запуска. Перед началом убедитесь, что участники посмотрели буктрейлер и готовы обсуждать ответы вместе.',
        actionLabel: 'Начать тест',
      },
      testQuestions: [
        {
          prompt: 'Какая семейная ценность ярче всего проявляется в заботе Пампалче о близких?',
          options: ['Равнодушие', 'Любовь и забота', 'Хитрость'],
          correctIndex: 1,
        },
        {
          prompt: 'Что показывает помощь родной сестры главной героине?',
          options: ['Взаимопомощь в семье', 'Желание спорить', 'Отказ от ответственности'],
          correctIndex: 0,
        },
        {
          prompt: 'Почему важно обсуждать поступки героев после просмотра?',
          options: [
            'Чтобы быстрее закончить модуль',
            'Чтобы понять, какие ценности можно применять в своей семье',
            'Чтобы выбрать самого сильного героя',
          ],
          correctIndex: 1,
        },
        {
          prompt: 'Какой вопрос помогает перенести тему сказки в жизнь семьи?',
          options: [
            'Как в вашей семье проявляется забота друг о друге?',
            'Сколько длится буктрейлер?',
            'Какой цвет у фона модуля?',
          ],
          correctIndex: 0,
        },
      ],
      sections: [
        {
          title: 'Как выполнить',
          items: [
            'Ответьте на вопросы по очереди: сначала ребенок, затем взрослые.',
            'После каждого ответа найдите в сказке или буктрейлере подтверждающий эпизод.',
            'Отметьте одну семейную ценность, которая чаще всего повторялась в ответах.',
          ],
        },
        {
          title: 'Что считается результатом',
          items: [
            'Семья назвала не меньше трех поступков героини.',
            'Участники объяснили, почему эти поступки важны для семьи.',
            'Команда выбрала одну ценность, которую хочет укреплять дома.',
          ],
        },
      ],
      note: 'Ответы можно обсудить всей семьей и использовать как основу для разговора после просмотра.',
    },
    practice: {
      title: 'Практическое задание',
      text: 'Напишите на листе бумаги важные для вашей семьи ценности и отобразите их в рисунке.',
      items: [
        'Выберите 3-5 семейных ценностей.',
        'Придумайте образ для каждой ценности.',
        'Нарисуйте общий семейный рисунок.',
        'Сфотографируйте работу для обратной связи с разработчиком.',
      ],
      sections: [
        {
          title: 'Подсказки для рисунка',
          items: [
            'Любовь можно показать через совместное объятие или общий семейный круг.',
            'Взаимопомощь можно изобразить как общее дело, где каждый выполняет свою часть.',
            'Уважение к старшим можно показать через разговор, помощь или семейную традицию.',
          ],
        },
        {
          title: 'Мини-рефлексия',
          items: [
            'Какая ценность оказалась самой важной для вашей семьи?',
            'Кто какую идею предложил для рисунка?',
            'Что вы захотели делать вместе чаще?',
          ],
        },
      ],
      note: 'Например, заботу можно показать через рисунок, где мама и ребенок обнимают друг друга.',
      feedback: {
        title: 'Отправить рисунок',
        placeholder: 'Напишите, какие семейные ценности вы выбрали и почему.',
        submitLabel: 'Отправить работу',
        withFile: true,
      },
    },
    story: {
      title: 'Сказка и буктрейлер',
      text: 'Буктрейлер знакомит с героями марийской сказки «Сереброзубая Пампалче», их поступками и семейными ценностями.',
      items: [
        'Посмотрите буктрейлер по мотивам сказки.',
        'Обратите внимание на доброту, смелость и заботу Пампалче.',
        'После просмотра перейдите к вопросам и семейному обсуждению.',
      ],
      sections: [
        {
          title: 'На что обратить внимание',
          items: [
            'Кому помогает Пампалче и почему она так поступает.',
            'Какие качества героини помогают ей защищать семью.',
            'Какие моменты сказки можно обсудить с детьми 6-10 лет.',
          ],
        },
        {
          title: 'После просмотра',
          items: [
            'Назовите главных героев.',
            'Выберите самый добрый поступок Пампалче.',
            'Подумайте, есть ли похожие традиции или истории в вашей семье.',
          ],
        },
      ],
      note: 'В конце буктрейлера предполагается ссылка на полный текст сказки.',
    },
  };

  openContent(key: ContentKey): void {
    this.activeContent = this.content[key];
    this.isFeedbackSent = false;
    this.isTestStarted = false;
    this.testScore = null;
  }

  closeContent(): void {
    this.activeContent = null;
    this.isFeedbackSent = false;
    this.isTestStarted = false;
    this.testScore = null;
  }

  submitFeedback(event: SubmitEvent): void {
    event.preventDefault();
    this.isFeedbackSent = true;
  }

  startTest(): void {
    this.isTestStarted = true;
    this.testScore = null;
  }

  submitTest(event: SubmitEvent): void {
    event.preventDefault();

    if (!this.activeContent?.testQuestions) {
      return;
    }

    const formData = new FormData(event.target as HTMLFormElement);
    this.testScore = this.activeContent.testQuestions.reduce((score, question, index) => {
      return score + (Number(formData.get(`question-${index}`)) === question.correctIndex ? 1 : 0);
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
