import { ICreateUserTokenDTO } from "../dtos/ICreateTokenDTO";
import { UserTokens } from "../infra/typeorm/entities/UserTokens";

export interface IUsersTokensRepository {
  create({
    user_id,
    expipres_date,
    refresh_token,
  }: ICreateUserTokenDTO): Promise<UserTokens>;
}
