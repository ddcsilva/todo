import { Injectable, signal } from '@angular/core';
import { Tarefa } from '../model/tarefa.model';

@Injectable({ providedIn: 'root' })
export class TarefasService {
  private tarefas = signal<Tarefa[]>([
    { id: 1, titulo: 'Comprar pão', concluida: false },
    { id: 2, titulo: 'Estudar Angular', concluida: true },
  ]);

  obterTarefas() {
    return this.tarefas.asReadonly();
  }

  adicionar(tarefa: Tarefa) {
    this.tarefas.update((lista) => [...lista, tarefa]);
  }

  alternarStatus(id: number) {
    this.tarefas.update((lista) =>
      lista.map((t) => (t.id === id ? { ...t, concluida: !t.concluida } : t))
    );
  }

  remover(id: number) {
    this.tarefas.update((lista) => lista.filter((t) => t.id !== id));
  }
}
