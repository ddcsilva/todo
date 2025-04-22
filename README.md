# ✅ Lista de Tarefas - Angular Enterprise Architecture

Este projeto é uma aplicação de lista de tarefas construída com **Angular 17+**, utilizando os princípios de arquitetura empresarial propostos por [Tomas Trajan](https://github.com/tomastrajan) no livro **Angular Enterprise Architecture**.

> 🔥 100% baseada em componentes standalone, Signals e boa arquitetura frontend moderna.

---

## 📐 Estrutura de Pastas (Enterprise)

A estrutura do projeto segue o padrão recomendado pelo livro:

```
src/app/
├── core/       # Serviços, providers e lógica compartilhada da aplicação
├── layout/     # Shell principal, header e footer
├── features/   # Domínio do negócio (tarefas)
├── ui/         # Componentes visuais burros e reutilizáveis
├── shared/     # Diretivas, pipes e helpers utilitários
```

---

## ✨ Funcionalidades

- ✅ Criar tarefas
- 🔁 Alternar status (pendente/concluída)
- 🗑️ Remover tarefas com confirmação
- 🔍 Filtrar tarefas concluídas
- 💾 Integração com JSON Server simulando backend REST
- ⚡ Implementado com **Signals**, **computed**, **ChangeDetectionStrategy.OnPush** e **lazy loading**

---

## 🧱 Arquitetura de Estado

O estado das tarefas é controlado por um **Store local** (com Signals), isolado do serviço HTTP:

```
TarefasService → comunica com a API
TarefasStore   → controla o estado com signal<Tarefa[]>
Componentes    → reagem ao state via computed()
```

---

## 🛡️ Garantia de Arquitetura

Este projeto usa o plugin:

```
eslint-plugin-boundaries
```

Para garantir que:
- 🧩 UI não dependa de features
- 🔁 Core nunca importe features
- 📦 Layout não quebre a modularidade

---

## 🎨 UI/UX Inspirado em Apps Reais

- Visual limpo, leve e responsivo
- Sem exageros visuais — estilo moderno (ex: Todoist, Trello)
- Acessibilidade e responsividade testada em mobile
- Feedback visual em interações (hover, toggles, estados vazios)

---

## 🚀 Tecnologias

- Angular 17+
- Angular Material 18
- Signals API (`signal`, `computed`)
- ESLint + eslint-plugin-boundaries
- JSON Server (simulação backend)
- Standalone Components
- Animations

---

## 📦 Para rodar localmente

```bash
# Instale as dependências
npm install

# Suba o json-server
npx json-server --watch db.json --port 3000

# Rode o app
ng serve
```

---

## 🧑‍💻 Autor

Feito com 💖 por [Danilo Silva](https://github.com/seuusuario)

---

## 📚 Baseado em:

📘 Livro: [Angular Enterprise Architecture](https://angular-enterprise-architecture.dev/)  
Autor: Tomas Trajan  
Versão aplicada: 2.4.0
