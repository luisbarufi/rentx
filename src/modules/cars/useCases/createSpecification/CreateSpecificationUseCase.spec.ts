import { AppError } from "../../../../errors/AppError";
import { SpecificationsRepositoryInMemory } from "../../repositories/in-memory/SpecificationsRepositoryInMemory";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

let createSpecificationUseCase: CreateSpecificationUseCase;
let specificationsRepositoryInMemory: SpecificationsRepositoryInMemory;

describe("Create Specification0", () => {
  beforeEach(() => {
    specificationsRepositoryInMemory = new SpecificationsRepositoryInMemory();
    createSpecificationUseCase = new CreateSpecificationUseCase(
      specificationsRepositoryInMemory
    );
  });

  it("should be able to creae a new specification", async () => {
    const specification = {
      name: "Epecification Test",
      description: "Specification Description Test",
    };

    await createSpecificationUseCase.execute({
      name: specification.name,
      description: specification.description,
    });

    const specificationCreated =
      await specificationsRepositoryInMemory.findByName(specification.name);

    expect(specificationCreated).toHaveProperty("id");
  });

  it("should not be able to create a new specification with a name that already exists", async () => {
    expect(async () => {
      const specification = {
        name: "Epecification Test",
        description: "Specification Description Test",
      };

      await createSpecificationUseCase.execute({
        name: specification.name,
        description: specification.description,
      });

      await createSpecificationUseCase.execute({
        name: specification.name,
        description: specification.description,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
