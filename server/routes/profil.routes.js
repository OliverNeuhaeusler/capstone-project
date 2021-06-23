import express from 'express';
import { postProfils, getProfils } from '../controller/profil-controller.js';

const router = express.Router();

router.post('/profil', postProfils);
router.get('/profil/:profilId', getProfils);

export default router;
