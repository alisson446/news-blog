# news-blog
Um projeto de blog simples contendo as pastas de api e cliente da aplicação

### blog-api
* Para configurar o projeto, você deve editar as variáveis de ambiente do server em `blog-api/.env` inserindo
suas informações de conexão com o banco de dados Mysql. Além disso, é necessário ter o banco "blog" criado nessa mesma
conexão para que as migrations possam funcionar

* Dentro da pasta "blog-api", execute os comandos `composer install`, `php artisan migrate` e em seguida rode o servidor na porta 8000 
`php -S localhost:8000 -t public`

### blog-client
* Dentro do diretório "blog-client", basta instalar as dependências  com o comando `npm install` e rodar o servidor `npm start`  
