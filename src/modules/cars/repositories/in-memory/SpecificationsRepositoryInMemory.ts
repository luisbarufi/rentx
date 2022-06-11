import { ICreateEspeficationDTO } from "../../dtos/ICreateEspeficationDTO";
import { Specification } from "../../infra/typeorm/entities/Specification";
import { ISpecificationsRepository } from "../ISpecificationsRepository";

export class SpecificationsRepositoryInMemory
  implements ISpecificationsRepository
{
  specifications: Specification[] = [];

  async findByName(name: string): Promise<Specification> {
    return this.specifications.find(
      (specification) => specification.name === name
    );
  }

  async list(): Promise<Specification[]> {
    return this.specifications;
  }

  async create({ name, description }: ICreateEspeficationDTO): Promise<void> {
    const specification = new Specification();

    Object.assign(specification, { name, description });

    this.specifications.push(specification);
  }
}
