import { Tarefa } from './tarefa.model';

export class ListaTarefas {
  constructor(public usuario: string, private tarefas: Tarefa[] = []) {}

  // Getter para acessar as tarefas de forma protegida
  get itens(): readonly Tarefa[] {
    return this.tarefas;
  }

  // Adiciona nova tarefa à lista
  adicionar(descricao: string) {
    this.tarefas.push(new Tarefa(descricao));
  }
}
