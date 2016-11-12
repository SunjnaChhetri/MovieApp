var express = require('express');
var router = express.Router();
var User=require('../models/users');


router.route('/read')
  .get(function(req,res)
{
        User.find({},function(err,docs){
            if(err){
                res.json(err);
            }
            else {
                res.json(docs);
            }
        })
});

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
                console.log("user inserted");
                res.send("user inserted");
            }
        });
    }
});
module.exports = router;
