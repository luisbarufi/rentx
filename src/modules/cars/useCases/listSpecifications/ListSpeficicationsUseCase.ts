import { Specification } from "../../entities/Specification";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

export class ListSpecificationsUseCase {
  constructor(private specificationsRepository: SpecificationsRepository) {}

  async execute(): Promise<Specification[]> {
    const specifications = await this.specificationsRepository.list();

    return specifications;
  }
}
