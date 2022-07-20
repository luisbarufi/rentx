import { Repository } from "typeorm";

import { dataSource } from "../../../../../shared/infra/typeorm";
import { ICreateUserTokenDTO } from "../../../dtos/ICreateTokenDTO";
import { IUsersTokensRepository } from "../../../repositories/IUsersTokensRepository";
import { UserTokens } from "../entities/UserTokens";

export class UsersTokensRepository implements IUsersTokensRepository {
  private repository: Repository<UserTokens>;

  constructor() {
    this.repository = dataSource.getRepository(UserTokens);
  }

  async create({
    user_id,
    expipres_date,
    refresh_token,
  }: ICreateUserTokenDTO): Promise<UserTokens> {
    const userToken = this.repository.create({
      user_id,
      expipres_date,
      refresh_token,
    });

    await this.repository.save(userToken);

    return userToken;
  }
}
