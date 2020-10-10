const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator/check');

const UserModel = require('./model/UserModel');
/** registration user route**/

router.post('/' ,[
    check('name', 'name is required').not().isEmpty(),
    check('email', 'Please enter Valid Email').isEmail(),
    check('password', 'Please Enter Password with min 8 or more characters').isLength({min:8})
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() });
    }
    const {name, email, password} = req.body; 
    try{
        /** if user already exist**/
        let user = await UserModel.findOne({email});
        if(user){
            return res.status(400).json({msg: 'User already Exist with Email Provide'});
        }
        /** if new user save it**/
        User = new UserModel({
            name,
            email,
            password
        })
        /**password converting into Hash format **/
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();
        res.send('user set');
        

    } catch (error){

    }
});


module.exports = router;