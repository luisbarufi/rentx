import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

export default (): CreateSpecificationController => {
  const speficicatonsRepository = new SpecificationsRepository();
  const createSpeficationUseCase = new CreateSpecificationUseCase(
    speficicatonsRepository
  );
  const createSpeficationController = new CreateSpecificationController(
    createSpeficationUseCase
  );

  return createSpeficationController;
};
