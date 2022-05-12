import { Router } from 'express';
import { categoriesRotes } from './categories.routes';
import { specificationRoutes } from './speficicatons.routes';

export const router = Router();

router.use('/categories', categoriesRotes);
router.use('/specifications', specificationRoutes);
