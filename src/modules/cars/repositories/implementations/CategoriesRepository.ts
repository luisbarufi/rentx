import { Repository } from "typeorm";

import { dataSource } from "../../../../database";
import { Category } from "../../entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

export class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = dataSource.getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({ description, name });

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const repositories = await this.repository.find();

    return repositories;
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ where: { name } });

    return category;
  }
}
