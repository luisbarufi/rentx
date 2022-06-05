import { Specification } from "../../infra/typeorm/entities/Specification";
import {
  ICreateEspeficationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

export class SpecificationsRepositoryInMemory
  implements ISpecificationsRepository
{
  specifications: Specification[] = [];

  async findByName(name: string): Promise<Specification> {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );

    return specification;
  }

  async list(): Promise<Specification[]> {
    const all = this.specifications;

    return all;
  }

  async create({ name, description }: ICreateEspeficationDTO): Promise<void> {
    const specification = new Specification();

    Object.assign(specification, { name, description });

    this.specifications.push(specification);
  }
}
