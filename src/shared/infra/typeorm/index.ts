import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";

import { User } from "../../../modules/accounts/infra/typeorm/entities/User";
import { Category } from "../../../modules/cars/infra/typeorm/entities/Category";
import { Specification } from "../../../modules/cars/infra/typeorm/entities/Specification";

export const dataSource = new DataSource({
  migrationsTableName: "migrations",
  type: "postgres",
  port: 5444,
  host: process.env.HOST,
  username: "docker",
  password: "ignite",
  database: "rentx",
  entities: [Category, Specification, User],
  migrations: ["./src/database/migrations/*.ts"],
});

dataSource.initialize();
