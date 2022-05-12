import { Router } from 'express';
import { createSpeficationController } from '../modules/cars/useCases/createSpecification';
import { listSpecificationsController } from '../modules/cars/useCases/listSpecifications';

export const specificationRoutes = Router();

specificationRoutes.post('/', (request, response) => {
  return createSpeficationController.handle(request, response);
});

specificationRoutes.get('/', (request, response) => {
  return listSpecificationsController.handle(request, response);
});
