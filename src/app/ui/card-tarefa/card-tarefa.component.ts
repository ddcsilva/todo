import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarefa } from '../../features/tarefas/model/tarefa.model';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-card-tarefa',
  templateUrl: './card-tarefa.component.html',
  styleUrls: ['./card-tarefa.component.css'],
  imports: [CommonModule, MatCardModule, MatCheckboxModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardTarefaComponent {
  @Input() tarefa!: Tarefa;

  @Output() alternar = new EventEmitter<void>();
  @Output() remover = new EventEmitter<void>();
}
