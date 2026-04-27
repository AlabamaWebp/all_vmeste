import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/story-intro/story-intro').then((m) => m.StoryIntro),
  },
  {
    path: 'module-1',
    loadComponent: () =>
      import('./pages/module-1/module-1').then((m) => m.Module1Component),
  },
  {
    path: 'module-2',
    loadComponent: () =>
      import('./pages/module-2/module-2').then((m) => m.Module2Component),
  },
  {
    path: 'module-3',
    loadComponent: () =>
      import('./pages/module-3/module-3').then((m) => m.Module3Component),
  },
  {
    path: 'module-4',
    loadComponent: () =>
      import('./pages/module-4/module-4').then((m) => m.Module4Component),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
