import { Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRotes = Router();
const categoriesRepository = new CategoriesRepository()

categoriesRotes.post('/', (request, response) => {
  const { name, description } = request.body;

  categoriesRepository.create({ name, description});

  return response.status(201).send();
});

export { categoriesRotes };
