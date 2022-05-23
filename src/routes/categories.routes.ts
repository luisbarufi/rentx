import { Router } from "express";
import multer from "multer";

import createCategoryController from "../modules/cars/useCases/createCategory";
import importCategoryController from "../modules/cars/useCases/importCategory";
import listCategoriesController from "../modules/cars/useCases/listCategories";

export const categoriesRotes = Router();

const upload = multer({
  dest: "./tmp",
});

categoriesRotes.post("/", (request, response) => {
  return createCategoryController().handle(request, response);
});

categoriesRotes.get("/", (request, response) => {
  return listCategoriesController().handle(request, response);
});

categoriesRotes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController().handle(request, response);
});
