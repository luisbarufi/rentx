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

  async create({
    name,
    description,
  }: ICreateEspeficationDTO): Promise<Specification> {
    const specification = new Specification();

    Object.assign(specification, { name, description });

    this.specifications.push(specification);

    return specification;
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const allSpecifications = this.specifications.filter((specification) =>
      ids.includes(specification.id)
    );

    return allSpecifications;
  }
}
