import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSpecificationsUseCase } from "./ListSpeficicationsUseCase";

export class ListSpecificationsController {
  async handle(request: Request, response: Response) {
    try {
      const listSpecificationsUseCase = container.resolve(
        ListSpecificationsUseCase
      );

      const specifications = await listSpecificationsUseCase.execute();

      return response.status(200).json(specifications);
    } catch (err) {
      return response.status(400).json({ err: err.message });
    }
  }
}
