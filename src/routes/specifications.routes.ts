import { Router } from "express";

import createSpeficationController from "../modules/cars/useCases/createSpecification";
import listSpecificationsController from "../modules/cars/useCases/listSpecifications";

export const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
  return createSpeficationController().handle(request, response);
});

specificationsRoutes.get("/", (request, response) => {
  return listSpecificationsController().handle(request, response);
});
