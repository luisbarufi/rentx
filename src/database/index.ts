import "dotenv/config";
import { DataSource } from "typeorm";

export const dataSource = new DataSource({
  type: "postgres",
  port: 5444,
  host: process.env.HOST,
  username: "docker",
  password: "ignite",
  database: "rentx",
});

dataSource.initialize();
