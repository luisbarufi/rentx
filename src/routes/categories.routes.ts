import { Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';

const categoriesRotes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRotes.post('/', (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRotes.get('/', (request, response) => {
  const categories = categoriesRepository.list();

  return response.status(201).json(categories);
});

export { categoriesRotes };
