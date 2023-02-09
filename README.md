# bookstore-api

### Database schema

+--------------+      +---------------------+       +------------------------------+
|  Livros      |      |      Usuários       |       |  Empréstimo                  |
+--------------+      +---------------------+       +------------------------------+
| ID           |------| ID                  |------| ID                            |
| Título       |      | Nome                |      | ID do Livro                   |
| Autor        |      | Endereço            |      | ID do Usuário                 |
| Editora      |      | Número de telefone  |      | Data do Empréstimo            |
| Ano de pub   |      | Email               |      | Data prevista para devolução  |
| Núm. páginas |      | Data de inscrição   |      | Data da devolução             |
| Quant. disp  |      |                     |      |                               |
+--------------+      +---------------------+      +-------------------------------+
