import express from 'express';

import { register, login } from '../controller/auth.controller.js';

const router = express.Router();

router.post('/createProfile', register);
router.post('/login', login);
export default router;
