import { Specification } from "../entities/Specification";

// DTO (Data Transfer Object)
export interface ICreateEspeficationDTO {
  name: string;
  description: string;
}

export interface ISpecificationsRepository {
  findByName(name: string): Promise<Specification>;
  list(): Promise<Specification[]>;
  create({ name, description }: ICreateEspeficationDTO): Promise<void>;
}
