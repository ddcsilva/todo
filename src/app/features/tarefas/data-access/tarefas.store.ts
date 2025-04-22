import { Injectable, signal, computed } from '@angular/core';
import { Tarefa } from '../model/tarefa.model';

/**
 * O Store é responsável por manter o estado local das tarefas
 * sem fazer chamadas HTTP — isso é dever do Service!
 */
@Injectable({ providedIn: 'root' })
export class TarefasStore {
  // Signal privado que armazena o array de tarefas
  private readonly _tarefas = signal<Tarefa[]>([]);

  // Exposição somente leitura para quem consumir o store
  readonly tarefas = this._tarefas.asReadonly();

  // Computed para saber quantas estão pendentes
  readonly tarefasPendentes = computed(
    () => this._tarefas().filter((t) => !t.concluida).length
  );

  // Substitui todo o estado
  atualizar(tarefas: Tarefa[]) {
    this._tarefas.set(tarefas);
  }

  // Adiciona uma nova tarefa
  adicionar(tarefa: Tarefa) {
    this._tarefas.update((tarefas) => [...tarefas, tarefa]);
  }

  // Remove uma tarefa por ID
  remover(id: string) {
    this._tarefas.update((tarefas) => tarefas.filter((t) => t.id !== id));
  }

  // Alterna o status (concluída ou não) de uma tarefa
  alternarStatus(id: string) {
    this._tarefas.update((tarefas) =>
      tarefas.map((t) => (t.id === id ? { ...t, concluida: !t.concluida } : t))
    );
  }
}
