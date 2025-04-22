import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TarefasService } from '../../features/tarefas/data-access/tarefas.service';
import { Tarefa } from '../../features/tarefas/model/tarefa.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private tarefasService: TarefasService) {}

  get tarefasPendentes() {
    return this.tarefasService.obterTarefas()().filter((t: Tarefa) => !t.concluida).length;
  }
}
