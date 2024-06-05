import { Router } from 'express';
import { deleteUser, forgotPassword, getUser, loginUser, registerUser, resetPassword, updateUser, verifyOtp } from '../controllers/userController';

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/verify-otp', verifyOtp);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

export default router;