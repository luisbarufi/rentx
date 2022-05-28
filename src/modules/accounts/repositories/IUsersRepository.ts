export interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  driver_license: string;
}

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
}
