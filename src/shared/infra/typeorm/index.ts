import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";

import { User } from "../../../modules/accounts/infra/typeorm/entities/User";
import { UserTokens } from "../../../modules/accounts/infra/typeorm/entities/UserTokens";
import { Car } from "../../../modules/cars/infra/typeorm/entities/Car";
import { CarImage } from "../../../modules/cars/infra/typeorm/entities/CarImage";
import { Category } from "../../../modules/cars/infra/typeorm/entities/Category";
import { Specification } from "../../../modules/cars/infra/typeorm/entities/Specification";
import { Rental } from "../../../modules/rentals/infra/typeorm/entities/Rental";

export const dataSource = new DataSource({
  migrationsTableName: "migrations",
  type: "postgres",
  port: 5444,
  host: process.env.HOST,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database:
    process.env.NODE_ENV === "test" ? process.env.DB_TEST : process.env.DB_DEV,
  entities: [Category, Specification, User, Car, CarImage, Rental, UserTokens],
  migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
});

dataSource.initialize();
