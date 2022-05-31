import { Repository } from "typeorm";

import { dataSource } from "../../../../database";
import { User } from "../../entities/User";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = dataSource.getRepository(User);
  }

  async create({
    name,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
      driver_license,
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const userEmail = await this.repository.findOne({ where: { email } });

    return userEmail;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne({ where: { id } });

    return user;
  }
}
