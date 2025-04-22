import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarefa } from '../model/tarefa.model';
import { firstValueFrom } from 'rxjs';
import { TarefasStore } from './tarefas.store';

@Injectable({
  providedIn: 'root',
})
export class TarefasService {
  private apiUrl = 'http://localhost:3000/tarefas';

  constructor(private http: HttpClient, private store: TarefasStore) {
    this.carregarTarefas();
  }

  async carregarTarefas() {
    const tarefas = await firstValueFrom(this.http.get<Tarefa[]>(this.apiUrl));
    this.store.atualizar(tarefas);
  }

  async adicionar(tarefa: Tarefa) {
    const novaTarefa = await firstValueFrom(
      this.http.post<Tarefa>(this.apiUrl, {
        ...tarefa,
        id: Date.now().toString(),
      })
    );
    this.store.adicionar(novaTarefa);
  }

  async alternarStatus(id: string) {
    const tarefas = this.store.tarefas();
    const tarefa = tarefas.find((t) => t.id === id);
    if (tarefa) {
      const tarefaAtualizada = { ...tarefa, concluida: !tarefa.concluida };
      await firstValueFrom(
        this.http.put<Tarefa>(`${this.apiUrl}/${id}`, tarefaAtualizada)
      );
      this.store.alternarStatus(id);
    }
  }

  async remover(id: string) {
    await firstValueFrom(this.http.delete(`${this.apiUrl}/${id}`));
    this.store.remover(id);
  }
}
