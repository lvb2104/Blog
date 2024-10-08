import express from 'express';
const router = express.Router();

import meController from '../app/controllers/MeController.js';

router.get('/storage/articles', meController.storageArticles);
router.get('/trash/articles', meController.trashArticles);

export default router;
