import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tarefa } from '../model/tarefa.model';
import { TarefasService } from '../data-access/tarefas.service';

@Component({
  standalone: true,
  selector: 'app-lista-tarefas',
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-tarefas.component.html',
})
export class ListaTarefasComponent {
  novaTarefa = '';

  constructor(private tarefasService: TarefasService) {}

  get tarefas() {
    return this.tarefasService.obterTarefas();
  }

  adicionarTarefa() {
    if (this.novaTarefa.trim()) {
      const nova: Tarefa = {
        id: Date.now(),
        titulo: this.novaTarefa.trim(),
        concluida: false,
      };
      this.tarefasService.adicionar(nova);
      this.novaTarefa = '';
    }
  }

  alternarStatus(tarefa: Tarefa) {
    this.tarefasService.alternarStatus(tarefa.id);
  }

  removerTarefa(tarefa: Tarefa) {
    this.tarefasService.remover(tarefa.id);
  }
}
