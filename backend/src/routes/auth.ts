import { Router } from 'express';
import { login, register, getProfile, refreshAccessToken } from '../controllers/auth';
import { validateLogin, validateRegister } from '../middleware/validation';
import { authenticateToken } from '../middleware/auth';

const router = Router();

router.post('/login', validateLogin, login);
router.post('/register', validateRegister, register);
router.get('/profile', authenticateToken, getProfile);
router.post('/refresh-token', refreshAccessToken);

export default router; 