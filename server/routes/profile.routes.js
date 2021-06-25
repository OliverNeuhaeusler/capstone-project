import express from 'express';
import { postProfiles, getProfiles } from '../controller/profile-controller.js';
import verifyToken from '../lib/verifyToken.js';

const router = express.Router();

router.post('/profile', postProfiles);
router.get('/profile', verifyToken, getProfiles);

export default router;
