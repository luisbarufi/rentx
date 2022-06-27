import { ICreateEspeficationDTO } from "../dtos/ICreateEspeficationDTO";
import { Specification } from "../infra/typeorm/entities/Specification";

export interface ISpecificationsRepository {
  findByName(name: string): Promise<Specification>;
  list(): Promise<Specification[]>;
  create({ name, description }: ICreateEspeficationDTO): Promise<Specification>;
  findByIds(ids: string[]): Promise<Specification[]>;
}
