import express from 'express';
import { verifyToken } from '../middleware/verifyUser.js';
import { create, deletepost, getposts, updatepost } from '../controllers/post.controller.js';

const postRouter = express.Router();

postRouter.post('/create', verifyToken, create);
postRouter.get('/getposts', getposts);
postRouter.delete('/deletepost/:postId/:userId', verifyToken, deletepost);
postRouter.put('/updatepost/:postId/:userId', verifyToken, updatepost);


export default postRouter;