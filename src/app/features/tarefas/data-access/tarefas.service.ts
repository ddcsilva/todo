import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarefa } from '../model/tarefa.model';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {
  private apiUrl = 'http://localhost:3000/tarefas';
  private tarefas = signal<Tarefa[]>([]);

  constructor(private http: HttpClient) {
    this.carregarTarefas();
  }

  async carregarTarefas() {
    const tarefas = await firstValueFrom(this.http.get<Tarefa[]>(this.apiUrl));
    this.tarefas.set(tarefas);
  }

  obterTarefas() {
    return this.tarefas;
  }

  async adicionar(tarefa: Tarefa) {
    const novaTarefa = await firstValueFrom(this.http.post<Tarefa>(this.apiUrl, {
      ...tarefa,
      id: Date.now().toString() // Garantir que o ID seja string
    }));
    this.tarefas.update(tarefas => [...tarefas, novaTarefa]);
  }

  async alternarStatus(id: string) {
    const tarefa = this.tarefas().find(t => t.id === id);
    if (tarefa) {
      const tarefaAtualizada = { ...tarefa, concluida: !tarefa.concluida };
      await firstValueFrom(this.http.put<Tarefa>(`${this.apiUrl}/${id}`, tarefaAtualizada));
      this.tarefas.update(tarefas =>
        tarefas.map(t => t.id === id ? tarefaAtualizada : t)
      );
    }
  }

  async remover(id: string) {
    await firstValueFrom(this.http.delete(`${this.apiUrl}/${id}`));
    this.tarefas.update(tarefas => tarefas.filter(t => t.id !== id));
  }
}
