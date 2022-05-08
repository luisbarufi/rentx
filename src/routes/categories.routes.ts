import { Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRotes = Router();
const categoriesRepository = new CategoriesRepository()

categoriesRotes.post('/', (request, response) => {
  const { name, description } = request.body;

  categoriesRepository.create({ name, description});

  return response.status(201).send();
});

categoriesRotes.get('/', (request, response) => {
  const categories = categoriesRepository.list();

  return response.status(201).json({ categories });
})

export { categoriesRotes };
