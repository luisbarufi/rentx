import { Request, Response } from "express";
import { container } from "tsyringe";

import { DevolutionRentalUseCase } from "./DevolutionRentalUseCase";

export class DevolutionRentalController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user;
    const { id } = request.params;
    const develutionsRentalUseCase = container.resolve(DevolutionRentalUseCase);

    const rental = await develutionsRentalUseCase.execute({
      id,
      user_id,
    });

    return response.status(201).json(rental);
  }
}
