# CRUD + NodeJs + Sequelize + MariaDb

---

## Criar projeto desde do início

Criar o package.json:

`npm init -y`

Instalar as dependências do projeto:

`yarn add express cors mariadb sequelize `

Instalar as dependências de desenvolvimento:

`yarn add morgan nodemon dotenv sequelize-cli -D`

### Para criar a conexão com o banco de dados:

Criar uma pasta para armazenar o arquivo de conexão:

```
src/database
└── index.js
```

Criar uma pasta armazenar as credenciais de acesso da base de dados:

```
src/config
└── database.js
```

### Configurar o banco de dados com o sequelize-cli

Criar arquivo `.sequelizerc` para informar para o sequelize as credenciais de acesso:

Criar a base de dados:

`yarn sequelize db:create`

Criar uma tabela com uma migration:

`yarn sequelize migration:create --name=create-user`

Depois de configurado a migration de criação executar comando:
`yarn sequelize db:migrate`

Desfazer a criação da última migration:
`yarn sequelize db:migrate:undo`

Adicionar novo campo na tabela:
`yarn sequelize migration:create --name=add-age-field-to-users`

### Insersão de registros

Criar uma pasta para representação de como a aplicação vai se comunicar com a base de dados:

```
src/model
└── User.js
```

### Relacionamentos de registros

Criar uma nova tabela:

`yarn sequelize migration:create --name=create-adresses`

Criar a tabela:
`yarn sequelize db:migrate`

---

## Rodar o projeto já criado

Instalar as depências:

`yarn`

Inicializar as migrations no banco de dados:

`yarn sequelize db:migrate`
