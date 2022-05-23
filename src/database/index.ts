import "dotenv/config";
import { DataSource } from "typeorm";

export const dataSource = new DataSource({
  migrationsTableName: "migrations",
  type: "postgres",
  port: 5444,
  host: process.env.HOST,
  username: "docker",
  password: "ignite",
  database: "rentx",
  migrations: ["./src/database/migrations/*.ts"],
});

dataSource.initialize();
