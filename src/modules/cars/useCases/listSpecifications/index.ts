import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ListSpecificationsController } from "./ListSpecificationsController";
import { ListSpecificationsUseCase } from "./ListSpeficicationsUseCase";

export default (): ListSpecificationsController => {
  const specificationsRepository = new SpecificationsRepository();
  const listSpecificationsUseCase = new ListSpecificationsUseCase(
    specificationsRepository
  );
  const listSpecificationsController = new ListSpecificationsController(
    listSpecificationsUseCase
  );

  return listSpecificationsController;
};
