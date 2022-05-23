import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";

import { Category } from "../modules/cars/entities/Category";

export const dataSource = new DataSource({
  migrationsTableName: "migrations",
  type: "postgres",
  port: 5444,
  host: process.env.HOST,
  username: "docker",
  password: "ignite",
  database: "rentx",
  entities: [Category],
  migrations: ["./src/database/migrations/*.ts"],
});

dataSource.initialize();
