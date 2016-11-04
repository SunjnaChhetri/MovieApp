var express = require('express');
var router = express.Router();
var User=require('../models/users');

/* GET users listing. */
router.route('/add')
  .post(function(req,res)
{
    if(req.body){
        var userVar = new User(req.body);
        console.log("inside if");
        userVar.save(function(err)
        {
            if(err)
            {
                console.log("Hello");
                res.send(err);
            }
            else {
                console.log("hgghg");
                res.json("user inserted");
            }
        });
    }
});
module.exports = router;
