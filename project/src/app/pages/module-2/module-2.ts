import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type ContentKey = 'materials' | 'questions' | 'practice';

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

interface QuestionPrompt {
  label: string;
  placeholder: string;
}

interface ModuleContent {
  title: string;
  text: string;
  items: string[];
  sections?: ContentSection[];
  questionPrompts?: QuestionPrompt[];
  note?: string;
  feedback?: FeedbackConfig;
}

@Component({
  selector: 'app-module-2',
  imports: [RouterLink],
  templateUrl: './module-2.html',
  styleUrl: './module-2.scss',
})
export class Module2Component {
  activeContent: ModuleContent | null = null;
  isFeedbackSent = false;
  isQuestionFormSent = false;

  private readonly content: Record<ContentKey, ModuleContent> = {
    materials: {
      title: 'Подготовка к мастер-классу',
      text: 'Перед просмотром видео подготовьте материалы для изготовления куклы-оберега «Крупенички».',
      items: [
        'ткань',
        'цветные нитки',
        'крупа',
        'ножницы',
        'хорошее настроение',
      ],
      sections: [
        {
          title: 'Что будет происходить',
          items: [
            'Ведущий напомнит сюжет сказки и предложит помочь Пампалче.',
            'Семья познакомится с ролью оберега в марийской культуре.',
            'Участники изготовят куклу-оберег и обсудят совместные решения.',
          ],
        },
        {
          title: 'Этапы мастер-класса',
          items: [
            'Подготовительный этап: знакомство с куклой-хранительницей и марийскими узорами.',
            'Основной этап: мешочек для крупы, одежда куклы, платок и оформление.',
            'Заключительный этап: демонстрация куклы, фотография и обратная связь.',
          ],
        },
      ],
      note: 'Мастер-класс развивает взаимопомощь, доверие, командную работу и семейный досуг.',
    },
    questions: {
      title: 'Вопросы после мастер-класса',
      text: 'После изготовления оберега обсудите совместную работу.',
      items: [
        'С какими трудностями вы столкнулись при изготовлении куклы?',
        'Помогали ли вы друг другу? Что вы чувствовали тогда?',
        'В какой комнате будет жить ваша кукла?',
        'Будет ли она напоминать о вашей совместной работе?',
      ],
      sections: [
        {
          title: 'Как обсуждать',
          items: [
            'Каждый участник называет один момент, где ему помогли.',
            'Команда выбирает самый сложный шаг и объясняет, как справилась.',
            'Взрослые и дети вместе решают, где будет храниться оберег.',
          ],
        },
        {
          title: 'Семейные ценности',
          items: [
            'Взаимопомощь: кто кому помогал.',
            'Доверие: к чьему совету прислушались.',
            'Общий досуг: что понравилось делать вместе.',
          ],
        },
      ],
      questionPrompts: [
        {
          label: 'С какими трудностями вы столкнулись при изготовлении куклы?',
          placeholder: 'Например: было сложно завязать платок, договориться о цветах, распределить роли...',
        },
        {
          label: 'Как вы помогали друг другу во время работы?',
          placeholder: 'Кто держал ткань, кто подсказывал, кто поддерживал и хвалил?',
        },
        {
          label: 'Что вы чувствовали, когда делали оберег вместе?',
          placeholder: 'Опишите настроение семьи и моменты, которые особенно запомнились.',
        },
        {
          label: 'Где будет жить ваша кукла-оберег и почему?',
          placeholder: 'Выберите комнату или место и объясните семейное решение.',
        },
      ],
      note: 'Эти ответы помогут увидеть, как во время мастер-класса проявились взаимопомощь, доверие и общий семейный досуг.',
    },
    practice: {
      title: 'Практическое задание',
      text: 'Напишите на листе бумаги пожелание «на удачу» для вашей семьи и куклы-оберега.',
      items: [
        'Сформулируйте пожелание вместе.',
        'Украсьте лист узорами или рисунком.',
        'Сфотографируйте куклу и пожелание для обратной связи.',
      ],
      sections: [
        {
          title: 'Шаблон пожелания',
          text: 'Начните фразу словами «Пусть наша кукла...» и добавьте то, что важно именно вашей семье.',
          items: [
            'бережет наш дом',
            'напоминает нам помогать друг другу',
            'сохраняет тепло и уважение в семье',
            'приносит удачу в общих делах',
          ],
        },
        {
          title: 'Итог работы',
          items: [
            'Готовая кукла-оберег.',
            'Семейное пожелание на бумаге.',
            'Фото результата для обратной связи.',
          ],
        },
      ],
      note: 'Пример: «Пусть наша кукла оберегает нашу семью от неудач и болезней».',
      feedback: {
        title: 'Отправить оберег и пожелание',
        placeholder: 'Опишите, какое пожелание вы написали и где будет жить ваша кукла.',
        submitLabel: 'Отправить результат',
        withFile: true,
      },
    },
  };

  openContent(key: ContentKey): void {
    this.activeContent = this.content[key];
    this.isFeedbackSent = false;
    this.isQuestionFormSent = false;
  }

  closeContent(): void {
    this.activeContent = null;
    this.isFeedbackSent = false;
    this.isQuestionFormSent = false;
  }

  submitFeedback(event: SubmitEvent): void {
    event.preventDefault();
    this.isFeedbackSent = true;
  }

  submitQuestionForm(event: SubmitEvent): void {
    event.preventDefault();
    this.isQuestionFormSent = true;
  }
}
