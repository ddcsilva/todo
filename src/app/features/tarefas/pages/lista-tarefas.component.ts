import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tarefa } from '../model/tarefa.model';
import { TarefasService } from '../data-access/tarefas.service';
import { TarefasStore } from '../data-access/tarefas.store';
import { CardTarefaComponent } from 'src/app/ui/card-tarefa/card-tarefa.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { trigger, transition, style, animate } from '@angular/animations';
import { signal, computed } from '@angular/core';
import { ConfirmacaoDialogComponent } from 'src/app/ui/confirmacao-dialog/confirmacao-dialog.component';

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
    MatSlideToggleModule,
    MatDialogModule,
  ],
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css'],
  animations: [
    trigger('tarefaAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate(
          '200ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '200ms ease-in',
          style({ opacity: 0, transform: 'translateY(-20px)' })
        ),
      ]),
    ]),
  ],
})
export class ListaTarefasComponent {
  novaTarefa = '';
  mostrarConcluidas = signal(false);

  // Computed usando o store para acessar o estado
  tarefasFiltradas = computed(() => {
    const tarefas = this.tarefasStore.tarefas();
    return tarefas.filter(
      (tarefa) => this.mostrarConcluidas() || !tarefa.concluida
    );
  });

  constructor(
    private tarefasService: TarefasService,
    private tarefasStore: TarefasStore,
    private dialog: MatDialog
  ) {}

  async adicionarTarefa() {
    if (this.novaTarefa.trim()) {
      const nova: Tarefa = {
        id: Date.now().toString(),
        titulo: this.novaTarefa.trim(),
        concluida: false,
      };
      await this.tarefasService.adicionar(nova);
      // O service já atualiza o store — não precisa mexer aqui
      this.novaTarefa = '';
    }
  }

  async alternarStatus(tarefa: Tarefa) {
    await this.tarefasService.alternarStatus(tarefa.id);
  }

  async removerTarefa(tarefa: Tarefa) {
    const dialogRef = this.dialog.open(ConfirmacaoDialogComponent, {
      width: '300px',
      data: { titulo: tarefa.titulo },
    });

    const result = await dialogRef.afterClosed().toPromise();
    if (result) {
      await this.tarefasService.remover(tarefa.id);
    }
  }

  toggleMostrarConcluidas() {
    this.mostrarConcluidas.update((v) => !v);
  }

  get tarefasPendentes() {
    return this.tarefasStore.tarefasPendentes();
  }
}
