import { Component } from '@angular/core';
import { ListaTarefas } from './lista-tarefas.model';
import { Tarefa } from './tarefa.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Instanciando a lista com algumas tarefas de exemplo
  private lista = new ListaTarefas('Danilo', [
    new Tarefa('Estudar Angular', true),
    new Tarefa('Tomar café'),
    new Tarefa('Dominar o Pro Angular 16'),
  ]);

  mostrarConcluidas: boolean = false;

  // Definindo as colunas que serão exibidas na tabela
  colunas: string[] = ['indice', 'descricao', 'concluida'];

  // Exibe o nome do usuário
  get nomeUsuario(): string {
    return this.lista.usuario;
  }

  // Exibe o número de tarefas pendentes
  get totalPendentes(): number {
    return this.lista.itens.filter((tarefa) => !tarefa.concluida).length;
  }

  // Vai ser usada pra exibir as tarefas (será útil na tabela)
  get tarefas(): readonly Tarefa[] {
    return this.lista.itens.filter(
      (tarefa) => this.mostrarConcluidas || !tarefa.concluida
    );
  }

  adicionarTarefa(descricao: string) {
    if (descricao.trim() !== '') {
      this.lista.adicionar(descricao);
    }
  }
}
