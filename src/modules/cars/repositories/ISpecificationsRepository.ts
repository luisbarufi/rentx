import { Specification } from "../model/Specification";

// DTO (Data Transfer Object)
export interface ICreateEspeficationDTO {
  name: string;
  description: string;
}

export interface ISpecificationsRepository {
  findByName(name: string): Specification;
  list(): Specification[];
  create({ name, description }: ICreateEspeficationDTO): void;
}
