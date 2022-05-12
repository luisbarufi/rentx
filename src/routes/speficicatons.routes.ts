import { Router } from 'express';
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationRoutes = Router();

const specificationsRepository = new SpecificationsRepository()

specificationRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const specificationService = new CreateSpecificationService(specificationsRepository);

  specificationService.execute({ name, description });

  return response.status(201).send();
});

specificationRoutes.get('/', (request, response) => {
  const specifications = specificationsRepository.list();

  return response.status(200).json(specifications);
});

export { specificationRoutes }