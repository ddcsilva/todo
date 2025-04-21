import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/tarefas/tarefas.routes').then((m) => m.TAREFAS_ROUTES),
  },
];
