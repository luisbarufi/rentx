import express from "express";
import { categoriesRotes } from "./routes/categories.routes";

const app = express();

app.use(express.json());
app.use('/categories', categoriesRotes)

app.listen(3333, () => console.log('Server is running'));
