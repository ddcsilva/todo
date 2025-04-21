import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarefa } from '../../features/tarefas/model/tarefa.model';

@Component({
  standalone: true,
  selector: 'app-card-tarefa',
  templateUrl: './card-tarefa.component.html',
  styleUrls: ['./card-tarefa.component.css'],
  imports: [CommonModule],
})
export class CardTarefaComponent {
  @Input() tarefa!: Tarefa;

  @Output() alternar = new EventEmitter<void>();
  @Output() remover = new EventEmitter<void>();
}
