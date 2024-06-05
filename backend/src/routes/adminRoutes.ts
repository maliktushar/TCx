import { Router } from 'express';
import { addCourse, addLiveProject, deleteCourse, deleteLiveProject, deleteUser, editCourse, editLiveProject, getAllUsers, getUserById } from '../controllers/adminController';

const router = Router();

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.delete('/users/:id', deleteUser);

router.post('/courses', addCourse);
router.put('/courses/:id', editCourse);
router.delete('/courses/:id', deleteCourse);

router.post('/live-projects', addLiveProject);
router.put('/live-projects/:id', editLiveProject);
router.delete('/live-projects/:id', deleteLiveProject);

export default router;
