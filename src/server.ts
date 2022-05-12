import express from "express";
import { categoriesRotes } from "./routes/categories.routes";
import { specificationRoutes } from "./routes/speficicatons.routes";

const app = express();

app.use(express.json());
app.use('/categories', categoriesRotes);
app.use('/specifications', specificationRoutes);

app.listen(3333, () => console.log('Server is running'));
