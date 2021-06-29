import express from 'express';
import { getProfiles } from '../controller/profile-controller.js';
import verifyToken from '../lib/verifyToken.js';

const router = express.Router();

router.get('/profile', verifyToken, getProfiles);

export default router;
