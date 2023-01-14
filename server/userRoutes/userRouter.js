import express from 'express'; 
import { userlogin, userRegister,allUsers } from '../controllers/auth.js';
const router = express.Router();

router.route('/login').post(userlogin);
router.route('/').post(userRegister).get(allUsers);

export default router; 
