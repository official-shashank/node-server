const express=require('express');
const { getAllUser, createUser } = require('../controllers/userControllers');

const router=express.Router();


router.route('/get').get(getAllUser);

router.route('/createuser').post(createUser);

module.exports=router;