# news-blog
Um projeto de blog simples contendo as pastas de servidor e cliente da aplicaçãp

### blog-server
* Para configurar o projeto, você deve editar as variáveis de ambiente do server em `blog-api/.env` inserindo
suas informções de conexão com o banco de dados Mysql. Além disso, é necessário ter o banco "blog" criado nessa mesma
conexão para que as migrations possam funcionar

* Execute os comandos `composer install`, `php artisan migrate` e sem seguida rode o servidor na porta 8000 
`php -S localhost:8000 -t public`
