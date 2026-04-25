import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/story-intro/story-intro').then((m) => m.StoryIntro),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
