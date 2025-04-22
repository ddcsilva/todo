import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TarefasStore } from '../../features/tarefas/data-access/tarefas.store';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private tarefasStore: TarefasStore) {}

  get tarefasPendentes() {
    return this.tarefasStore.tarefasPendentes();
  }
}
