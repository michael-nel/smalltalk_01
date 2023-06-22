const express = require("express");
const cors = require("cors");
const { v4: uuid, validate: isUuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];
let _index = -1;

function idExists(request, response, next) {
  
  const { id } = request.params;

  if(!isUuid(id)){
    response.status(400).json({error: 'Its not UUID.'})
  }
  
  _index = repositories.findIndex(repo => repo.id === id);

  if(_index === -1) {
    return response.status(400).json({error: 'Repository not found.'})
  }

  return next();

}

app.get("/repositories", (request, response) => {

  return response.status(200).json(repositories);

});

app.post("/repositories", (request, response) => {

  const { title, url, description } = request.body;

  const repo = { id: uuid(), title: title, url: url, description: description};

  repositories.push(repo);

  response.status(201).json(repo);
});

app.put("/repositories/:id", idExists, (request, response) => {
  const { title, url, techs } = request.body;

  repositories[_index].title = title;
  repositories[_index].url = url;
  repositories[_index].description = description;

  return response.status(200).json(repositories[_index]);
});

app.delete("/repositories/:id", idExists, (request, response) => {
  
  repositories.splice(_index, 1);

  return response.status(204).send();
});

app.listen(3000, () => {
  console.log('👀 Back-end started');
});