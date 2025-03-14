# industrias_wayne


---

## Projeto de Gestão de Funcionários e Equipamentos

Este projeto é uma aplicação web para gerenciar funcionários e equipamentos de uma empresa. A aplicação é dividida em duas partes: backend e frontend.

### Backend

- **Tecnologia:** Flask (Python)
- **Banco de Dados:** SQLite
- **Funcionalidades:** 
  - Autenticação de usuários
  - CRUD (Create, Read, Update, Delete) de funcionários
  - CRUD de equipamentos

### Frontend

- **Tecnologia:** HTML, CSS, JavaScript
- **Frameworks e Bibliotecas:** Bootstrap para estilização e Chart.js para gráficos
- **Funcionalidades:**
  - Interface para login
  - Interface para cadastro, edição e exclusão de funcionários
  - Interface para cadastro, edição e exclusão de equipamentos
  - Dashboard para visualização de dados com gráficos

### Estrutura do Projeto

- **BACK**
  - `app.py`: Arquivo principal do backend, define as rotas da API
  - `db.py`: Conexão e criação das tabelas no banco de dados
  - `database.db`: Arquivo do banco de dados SQLite

- **FRONT**
  - `index.html`: Página inicial
  - `cadastro.html`: Página de cadastro de funcionários
  - `estoque.html`: Página de controle de estoque
  - `dash.html`: Página de dashboard
  - `login.html`: Página de login
  - `style.css`: Arquivo de estilos
  - `cadastro.js`: Lógica de cadastro de funcionários
  - `estoque.js`: Lógica de controle de estoque
  - `dash.js`: Lógica do dashboard
  - `login.js`: Lógica de autenticação

---

Este projeto fornece uma solução completa para a gestão de funcionários e equipamentos, permitindo um controle eficiente e visualização dos dados através de uma interface amigável.
