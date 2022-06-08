import { Repository } from "typeorm";

import { dataSource } from "../../../../../shared/infra/typeorm";
import { ICreateEspeficationDTO } from "../../../dtos/ICreateEspeficationDTO";
import { ISpecificationsRepository } from "../../../repositories/ISpecificationsRepository";
import { Specification } from "../entities/Specification";

export class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = dataSource.getRepository(Specification);
  }

  async create({ name, description }: ICreateEspeficationDTO): Promise<void> {
    const specification = this.repository.create({ name, description });

    await this.repository.save(specification);
  }

  async list(): Promise<Specification[]> {
    const repositories = await this.repository.find();

    return repositories;
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({ where: { name } });

    return specification;
  }
}
