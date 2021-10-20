const express = require("express");

const app = express();

app.use(express.json());

const { v4: uuid, validate } = require("uuid");

const repositories = [];


//Rotas
app.get("/repositories", (request, response) => {
  return response.json(repositories);

});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body

  const repository = {
    id: uuid(), 
    title,
    url,
    techs,   
    likes: 0
  };

  //Guardando dentro do array os dados
  repositories.push(repository);

  return response.status(201).json(repository);
});

app.put("/repositories/:id", (request, response) => {
  const { title, url, techs } = request.body;
  const { id } = request.params;
  
  const repository = repositories.find((repository) => repository.id === id);

  if(!repository){
    return response.status(404).json({ error: "Repository not found" });
  };  

  repository.title = title;
  repository.url = url;
  repository.techs = techs; 

  return response.json(repository);
});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;
  
  repositoryIndex = repositories.findIndex((repository) => repository.id === id);
  //O findIndex vai pegar a posição do resultado da verificação. Se estiver na posição 0, 1, ou 2 e assim por diante, mas se não existir vai retornar -1

  //Se o repositoryIndex for igual a -1, ele não existe
  if (repositoryIndex === -1) {
    return response.status(404).json({ error: "Repository not found" });
  }

  //splice - O splice recebe dois parâmetros: primeiro parâmetro(onde vai iniciar a remoção), segundo parâmetro(onde vai terminar a remoção, aqui nesse caso, só ele mesmo)
  repositories.splice(repositoryIndex, 1); //Então a partir da posição 2, por exemplo, exclua 1 elemento. No caso, somente o repositoryIndex
  
  return response.status(204).send();
});

app.post("/repositories/:id/like", (request, response) => {
  const {id} = request.params;

  repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if (repositoryIndex < 0) {
    return response.status(404).json({ error: "Repository not found" });
  }

  const likes = ++repositories[repositoryIndex].likes;

  return response.json(repositories[repositoryIndex]);
});

module.exports = app;
