# 📚 Biblioteca API

Uma API REST simples e funcional para o gerenciamento de acervo de livros e usuários. Este projeto foi desenvolvido em **Node.js** utilizando o framework **Express** e o banco de dados **SQLite** para fins de estudo sobre operações CRUD.

---

## 🚀 Tecnologias Utilizadas

* **Node.js**: Ambiente de execução para o servidor.
* **Express**: Framework para criação de rotas e middleware.
* **better-sqlite3**: Driver rápido e eficiente para persistência em SQLite.
* **Nodemon**: Para reinicialização automática do servidor durante o desenvolvimento.

---

## 🛠️ Como Instalar e Rodar

1. **Clone este repositório:**

   ```bash
   git clone https://github.com/luiz-fardim/api-biblioteca-express
   ```

2. **Acesse a pasta do projeto:**

   ```bash
   cd api-biblioteca-express
   ```

3. **Instale as dependências necessárias:**

   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

   O servidor estará disponível em: **`http://localhost:3000`**

---

## 📌 Rotas da API

### 📚 Livros

| Método     | Rota          | Descrição                                         |
| :--------- | :------------ | :------------------------------------------------ |
| **GET**    | `/livros`     | Lista todos os livros cadastrados no banco.       |
| **GET**    | `/livros/:id` | Busca os detalhes de um livro específico pelo ID. |
| **POST**   | `/livros`     | Cadastra um novo livro no acervo.                 |
| **PUT**    | `/livros/:id` | Atualiza os dados de um livro existente.          |
| **DELETE** | `/livros/:id` | Remove um livro do banco de dados.                |

### 👤 Usuários

| Método   | Rota            | Descrição                            |
| :------- | :-------------- | :----------------------------------- |
| **GET**  | `/usuarios`     | Lista todos os usuários cadastrados. |
| **GET**  | `/usuarios/:id` | Busca um usuário pelo ID.            |
| **POST** | `/usuarios`     | Cadastra um novo usuário.            |

---

## 📥 Exemplos de JSON

### 📚 Livros (POST e PUT)

```json
{
  "titulo": "A Cartomante",
  "autor": "Machado de Assis",
  "ano": 1871
}
```

---

### 👤 Usuários (Cadastro)

**Requisição:**

```json
{
  "nome": "Luizinho",
  "email": "luizinholegal@gmail.com"
}
```

**Resposta:**

```json
{
  "id": 1,
  "nome": "Luizinho",
  "email": "luizinholegal@gmail.com"
}
```

---

## 🎯 Objetivo do Projeto

Este projeto tem como objetivo praticar:

* Criação de APIs REST
* Operações CRUD
* Integração com banco de dados SQLite
* Estruturação de backend com Node.js

---

## 📌 Próximos Passos (Melhorias)

* 🔐 Implementar autenticação com JWT
* 🔒 Criptografia de senha com bcrypt
* 📊 Relacionamento entre usuários e empréstimos
* 📁 Melhor organização em camadas (MVC)

---
