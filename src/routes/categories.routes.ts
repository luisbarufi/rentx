import { Router } from 'express';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

export const categoriesRotes = Router();

categoriesRotes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRotes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
});
