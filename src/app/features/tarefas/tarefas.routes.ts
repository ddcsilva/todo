import { Routes } from '@angular/router';
import { ListaTarefasComponent } from './pages/lista-tarefas.component';

export const TAREFAS_ROUTES: Routes = [
  {
    path: '',
    component: ListaTarefasComponent,
  },
];
