import { Routes } from '@angular/router';
import { ShellComponent } from './layout/shell/shell.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/tarefas/tarefas.routes').then(
            (m) => m.TAREFAS_ROUTES
          ),
      },
    ],
  },
];
