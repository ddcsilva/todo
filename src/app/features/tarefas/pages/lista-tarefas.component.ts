import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';

interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
}

@Component({
  selector: 'app-lista-tarefas',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatBadgeModule,
  ],
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css'],
})
export class ListaTarefasComponent {
  nomeUsuario = 'Danilo';
  tarefas: Tarefa[] = [
    { id: 1, titulo: 'Estudar Angular Enterprise', concluida: false },
    { id: 2, titulo: 'Ler capítulo 2.1 do livro', concluida: true },
    { id: 3, titulo: 'Assistir vídeo sobre RxJS', concluida: false },
    { id: 4, titulo: 'Fazer exercícios de fixação', concluida: true },
    { id: 5, titulo: 'Revisar o conteúdo da aula', concluida: false },
    { id: 6, titulo: 'Preparar apresentação do projeto', concluida: false },
    { id: 7, titulo: 'Enviar feedback para o professor', concluida: true },
    { id: 8, titulo: 'Organizar materiais de estudo', concluida: false },
    { id: 9, titulo: 'Planejar a próxima semana', concluida: false },
    { id: 10, titulo: 'Revisar anotações da aula', concluida: true },
  ];

  get totalPendentes(): number {
    return this.tarefas.filter((t) => !t.concluida).length;
  }

  alternarConcluida(tarefa: Tarefa) {
    tarefa.concluida = !tarefa.concluida;
  }
}
