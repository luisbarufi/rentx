import { Specification } from "../../model/Specification";
import { SpecificationsRepository } from "../../repositories/SpecificationsRepository";

export class ListSpecificationsUseCase {
  constructor( private specificationsRepository: SpecificationsRepository ) {}

  execute(): Specification[] {
    const specifications = this.specificationsRepository.list();

    return specifications;
  }
}
