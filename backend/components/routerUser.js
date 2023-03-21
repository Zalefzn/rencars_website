import express from 'express';
import { getUsers, Register, Login, Logout } from './userController.js';
import verifyToken from './middleWhere.js';
import refreshTokens from './refToken.js';

const router = express.Router();

router.get('/userCars', verifyToken, getUsers);
router.post('/userCars', Register);
router.post('/userCars', Login);
router.get('/token', refreshTokens);
router.delete('/logout', Logout);

export default router;