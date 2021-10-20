## Corrigindo códigos  
Desafio 03 da trilha Node.js - Ignite Rocketseat  

Nesse desafio, temos uma aplicação Node.js que está em processo de desenvolvimento mas que já possui os testes necessários para fazer toda a validação dos requisitos.  
Após algumas alterações no código da aplicação, parte dos testes deixaram de passar nos testes e agora só você pode resolver esse problema. 

Essa aplicação realiza o CRUD (**C**reate, **R**ead, **U**pdate, **D**elete) de repositórios de projetos. Além disso, é possível dar likes em repositórios cadastrados, aumentando a quantidade de likes em 1 a cada vez que a rota é chamada.  

### Requisitos - Desafio 03  
[x] Should be able to create a new repository  
[x] Should be able to list the projects  
[x] Should be able to update repository(`title`, `url` and `techs`)  
[x] Should be able to delete the repository  
[x] Should be able to give a like to the repository   

### Regras de negócio - Desafio 03
[x] Should not be able to update a non existing repository  
[x] Should not be able to update repository likes manually  
[x] Should not be able to delete a non existing repository  
[x] Should not be able to give a like to a non existing repository  

## Instalação  

### Clone este repositório 
-> git clone https://github.com/nathaliafbarros/desafio03-trilha-nodejs.git

### Entre na pasta do projeto clonado  
-> cd desafio03-trilha-nodejs

### Instale as dependências
-> yarn ou yarn install

### Para startar o servidor (O servidor iniciará na porta:3333. Acesse http://localhost:3333)
-> yarn dev

### Para rodar os testes
-> yarn test

### Sobre os testes automatizados
Os testes sempre vão ficar dentro de uma pasta chamada `__tests__` dentro da pasta `src`.

Dentro da pasta de testes, para cada arquivo testado na sua aplicação, existe um arquivo com o mesmo nome, com a extensão `.spec.js`.

Para começar a utilizar os testes, execute o comando `yarn test` no seu terminal, e ele irá te retornar o resultado dos testes.




