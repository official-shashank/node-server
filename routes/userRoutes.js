const express=require('express');
const { getAllUser } = require('../controllers/userControllers');

const router=express.Router();


router.route('/get').get(getAllUser);

module.exports=router;