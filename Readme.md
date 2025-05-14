🍔 DevBurger Interface
A DevBurger Interface é a aplicação frontend da hamburgueria DevBurger, com duas áreas principais:

Área do Cliente – Visualização de produtos e realização de pedidos.

Área Administrativa – Gerenciamento de produtos, categorias e pedidos.

💡 Esta interface consome dados da [DevBurger API], que fornece todas as funcionalidades do sistema.

📌 Índice
Recursos

Tecnologias

Instalação

Configuração

✅ Recursos
🛍️ Área do Cliente
Navegação por categorias.

Adição de produtos ao carrinho.

Visualização e finalização de pedidos.

🛠️ Área Administrativa
Gerenciamento de produtos (criar, editar e remover).

Gerenciamento de categorias.

Controle de pedidos em andamento.

🧰 Tecnologias
React.js – Biblioteca para construção de interfaces.

React Router – Gerenciamento de rotas.

Axios – Cliente HTTP para integração com a API.

Styled Components – Estilização com CSS-in-JS.

🚀 Instalação
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/brendafragoso/devburger-interface.git
Acesse o diretório do projeto:

bash
Copiar
Editar
cd devburger-interface
Instale as dependências:

bash
Copiar
Editar
npm install
Inicie o servidor de desenvolvimento:

bash
Copiar
Editar
npm start
⚙️ Configuração
Certifique-se de que a DevBurger API está rodando localmente.
Atualize a URL base da API em src/config/api.js:

js
Copiar
Editar
export const API_BASE_URL = 'http://localhost:3333';