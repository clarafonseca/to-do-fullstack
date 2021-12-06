# To-do List Fullstack

O to-do list um aplicativo de gerenciamento de tarefas pessoal que permita aos usuários pesquisar e focar nas tarefas que precisam ser feitas.

# Configurando o servidor

Para configurar o servidor verifique que vc está no caminho certo: `to-do-fullstack/server`

### Iniciando a Aplicação

```bash
npm install
node src/app
```

### Configurando o banco de dados

Configure as variáveis de ambiente e crie seu banco de dados com o PostgreSQL de acordo com suas variáveis de ambiente

```
PORT=
DOMAIN=

# Dados do banco de dados
DB_NAME=meu_banco_de_dados
DB_HOST=localhost
DB_USER=_usuario_do_banco_de_dados
DB_PASS=minha_senha_do_banco_de_dados
DB_PORT=5432
```

Rode os comandos:

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

```

### Rotas

```
🎯 http://localhost:3001/api/{route:key}/
```

Por fim, teste a API pelo [postman](https://go.postman.co/workspace/My-Workspace~cb2048c7-ea34-4b6f-86f9-b660cc7dc83a/collection/13485498-2822b947-145b-40e1-988d-701f2f20640f)

# Iniciando o front-end

Para configurar o front-end verifique que vc está no caminho certo: `to-do-fullstack/web`


### Iniciando a Aplicação

```bash
npm install
npm run start
```

Abra [http://localhost:3000](http://localhost:3000) para ver a aplicação no browser.
