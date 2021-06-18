import express from 'express';
import { postProfiles, getProfiles } from '../controller/profile-controller.js';

const router = express.Router();

router.post('/profile', postProfiles);
router.get('/profile/:profileId', getProfiles);

export default router;
