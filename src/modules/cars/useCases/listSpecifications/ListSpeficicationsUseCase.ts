import { injectable, inject } from "tsyringe";

import { Specification } from "../../infra/typeorm/entities/Specification";
import { SpecificationsRepository } from "../../infra/typeorm/repositories/SpecificationsRepository";

@injectable()
export class ListSpecificationsUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: SpecificationsRepository
  ) {}

  async execute(): Promise<Specification[]> {
    const specifications = await this.specificationsRepository.list();

    return specifications;
  }
}
