import { Component } from '@angular/core';

type ContentKey = 'recipe' | 'practice' | 'certificate';

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

interface ModuleContent {
  title: string;
  text: string;
  items: string[];
  sections?: ContentSection[];
  note?: string;
  feedback?: FeedbackConfig;
}

@Component({
  selector: 'app-module-4',
  templateUrl: './module-4.html',
  styleUrl: './module-4.scss',
})
export class Module4Component {
  activeContent: ModuleContent | null = null;
  isFeedbackSent = false;

  private readonly content: Record<ContentKey, ModuleContent> = {
    recipe: {
      title: 'Кулинарный мастер-класс',
      text: 'Модуль посвящен приготовлению национального блюда народа мари «Пулашкамуно».',
      items: [
        'Вспомните эпизод сказки, где героиня готовила блюдо вместе с отцом.',
        'Посмотрите этапы приготовления и пошаговую инструкцию.',
        'Обсудите особенности марийской кухни и традиций.',
        'Приготовьте блюдо вместе всей семьей.',
      ],
      sections: [
        {
          title: 'Перед готовкой',
          items: [
            'Распределите роли: кто читает рецепт, кто готовит продукты, кто помогает убирать рабочее место.',
            'Вспомните, какие блюда вашей семьи связаны с традициями.',
            'Обсудите, почему совместная готовка помогает семье быть ближе.',
          ],
        },
        {
          title: 'После готовки',
          items: [
            'Сфотографируйте готовое блюдо.',
            'Придумайте короткое описание для выставки «В кругу семьи».',
            'Посмотрите работы других участников и выберите понравившуюся.',
          ],
        },
      ],
      note: 'Готовый продукт можно сфотографировать и выложить в комментарии группы ВКонтакте.',
      feedback: {
        title: 'Отправить фото блюда',
        placeholder: 'Напишите, кто участвовал в готовке и что нового вы узнали о марийской кухне.',
        submitLabel: 'Отправить блюдо',
        withFile: true,
      },
    },
    practice: {
      title: 'Практическое задание',
      text: 'Представьте, что Пампалче приглашена к вам в гости.',
      items: [
        'Чем вы будете ее угощать?',
        'Какие блюда марийской кухни будут на вашем столе?',
        'Какие семейные традиции вы покажете гостье?',
      ],
      sections: [
        {
          title: 'Составьте меню',
          items: [
            'Выберите основное блюдо.',
            'Добавьте угощение, которое любит ваша семья.',
            'Подумайте, какой рассказ о традициях вы сопроводите к блюду.',
          ],
        },
        {
          title: 'Ответьте вместе',
          items: [
            'Почему вы выбрали именно эти блюда?',
            'Кто в семье обычно готовит похожее угощение?',
            'Как вы проявите гостеприимство к Пампалче?',
          ],
        },
      ],
      note: 'Ответы можно отправить по ссылке обратной связи.',
      feedback: {
        title: 'Отправить меню для Пампалче',
        placeholder: 'Опишите, чем вы бы угостили Пампалче и какую семейную традицию показали бы ей.',
        submitLabel: 'Отправить меню',
        withFile: false,
      },
    },
    certificate: {
      title: 'Завершение путешествия',
      text: 'После прохождения всех модулей Пампалче благодарит участников за увлекательное путешествие.',
      items: [
        'Вспомните, чему научилась ваша команда.',
        'Назовите семейные ценности, которые проявились во время модулей.',
        'Перейдите по ссылке для получения сертификата участника.',
      ],
      sections: [
        {
          title: 'Итоговая рефлексия',
          items: [
            'Что вы сделали вместе за время путешествия?',
            'Какой модуль больше всего сблизил семью?',
            'Какая ценность стала для вас главной: любовь, взаимопомощь, забота, уважение или доверие?',
          ],
        },
        {
          title: 'Для сертификата',
          items: [
            'Укажите имя семьи или участников.',
            'Напишите, какие задания выполнены.',
            'Добавьте короткий отзыв о платформе.',
          ],
        },
      ],
      feedback: {
        title: 'Заявка на сертификат',
        placeholder: 'Напишите имена участников и какие модули вы прошли.',
        submitLabel: 'Отправить заявку',
        withFile: false,
      },
    },
  };

  openContent(key: ContentKey): void {
    this.activeContent = this.content[key];
    this.isFeedbackSent = false;
  }

  closeContent(): void {
    this.activeContent = null;
    this.isFeedbackSent = false;
  }

  submitFeedback(event: SubmitEvent): void {
    event.preventDefault();
    this.isFeedbackSent = true;
  }
}
