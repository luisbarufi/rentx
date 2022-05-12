import { Router } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory';

const categoriesRotes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRotes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRotes.get('/', (request, response) => {
  const categories = categoriesRepository.list();

  return response.status(201).json(categories);
});

export { categoriesRotes }
