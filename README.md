# bd_rh

Este repositório contém o projeto **bd_rh**, uma aplicação de gestão de Recursos Humanos (RH) desenvolvida em **Vue.js** (frontend) e **Node.js/Express** (backend). A aplicação visa facilitar processos de registo, consulta e atualização de dados de colaboradores, ausências, formação e outros módulos relacionados à administração de pessoal.

## Estrutura do Projeto

```
bd_rh/
├─ bd_rh_frontend/
│   ├─ src/
│   ├─ public/
│   ├─ package.json
│   └─ ...
└─ bd_rh_backend/
    ├─ config/
    ├─ routes/
    ├─ package.json
    └─ ...
```

- **bd_rh_frontend**: Contém o código do frontend em Vue.js.
- **bd_rh_backend**: Contém a lógica do servidor, possivelmente Node.js (Express), etc.

## Principais Funcionalidades

- **Gestão de Colaboradores**: Criação, listagem, edição e remoção de colaboradores.
- **Módulo de Ausências**: Registo e acompanhamento de ausências e férias.
- **Formação**: Visualização e gestão de formações agendadas.
- (Adicione aqui outras funcionalidades relevantes.)

## Commits Recentes

- [Atualizações no Frontend](https://github.com/lsantos1970/bd_rh/commit/4e7a41af882a1388252595e8198c464a0ecdeb40)  
- [Atualizações no Backend](https://github.com/lsantos1970/bd_rh/commit/489b3a0f8523400c736f682603bd39d6b8459223)

## Instruções de Instalação e Execução

### Clonar Repositório

```sh
git clone https://github.com/lsantos1970/bd_rh.git
cd bd_rh
```

### Backend (bd_rh_backend)

1. Entre na pasta do backend:
   ```sh
   cd ../bd_rh_backend
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie a aplicação backend:
   ```sh
   npm start
   ```
4. Normalmente a API ficará acessível em `http://localhost:3000/`

### Frontend (bd_rh_frontend)

1. Entre na pasta do frontend:
   ```sh
   cd bd_rh_frontend
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie o servidor de desenvolvimento (Vue CLI):
   ```sh
   npm run serve
   ```
4. A aplicação ficará disponível em `http://localhost:8080/`


## Contribuindo

1. Faça um **fork** do projeto.
2. Crie uma *branch* para a sua *feature*:
   ```sh
   git checkout -b feature/AmazingFeature
   ```
3. Commit as suas mudanças:
   ```sh
   git commit -m 'Add some AmazingFeature'
   ```
4. Faça *push* para a *branch*:
   ```sh
   git push origin feature/AmazingFeature
   ```
5. Abra um *Pull Request* para análise.

---
