import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tarefa } from '../model/tarefa.model';
import { TarefasService } from '../data-access/tarefas.service';
import { CardTarefaComponent } from 'src/app/ui/card-tarefa/card-tarefa.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-lista-tarefas',
  imports: [
    CommonModule,
    FormsModule,
    CardTarefaComponent,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css'],
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
