import { SpecificationsRepository } from "../../repositories/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const speficicatonsRepository = SpecificationsRepository.getInstance();
const createSpeficationUseCase = new CreateSpecificationUseCase(speficicatonsRepository);

export const createSpeficationController = new CreateSpecificationController(
  createSpeficationUseCase
);
