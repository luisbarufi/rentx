import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const categories = await this.listCategoriesUseCase.execute();

      return response.status(201).json(categories);
    } catch (err) {
      return response.status(400).json({ err: err.message });
    }
  }
}
