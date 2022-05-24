import { Request, Response } from "express";

import { ListSpecificationsUseCase } from "./ListSpeficicationsUseCase";

export class ListSpecificationsController {
  constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const specifications = await this.listSpecificationsUseCase.execute();

      return response.status(200).json(specifications);
    } catch (err) {
      return response.status(400).json({ err: err.message });
    }
  }
}
