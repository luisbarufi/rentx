import { Router } from 'express';

const categoriesRotes = Router();

const categories = [];

categoriesRotes.post('/categories', (request, response) => {
  const { name, description } = request.body;

  categories.push({
    name,
    description
  });

  return response.status(201).send();
});

export { categoriesRotes };
