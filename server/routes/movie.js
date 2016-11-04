var express = require('express');
var router = express.Router();
var Movie=require('../models/movie')
/* POST home page. */
router.route('/add')
  .post(function(req,res)
{
    if(req.body){
        var userVar = new Movie(req.body);
        console.log("inside if");
        userVar.save(function(err)
        {
            if(err)
            {
                console.log("Error");
                res.send(err);
            }
            else {
                res.json("movie inserted");
            }
        });
    }
});


router.route('/read')
  .get(function(req,res)
{
        getMovies.find({},function(err,docs){
            if(err){
                res.json(err);
            }
            else {
                res.json({getMovies:docs});
            }
        })
});
router.route('/readone')
.post(function(req,res){
Movie.find({ Title: req.body.Title }, function(err, data) {
  if (err) throw err;

  // object of the user
  console.log(data);
  res.json(data);
});
});


router.route('/update/:title')
  .put(function(req,res)
{


        getMovies.update({ Title:req.params.title },{ Title: req.body.Title},function(err, user) {
            if (err)
            throw err;


  // we have the updated user returned to us
        console.log(user);
        res.json("updated");
});
});

router.route('/delete/:title')
.delete(function(req,res)
{
    Movie.findOneAndRemove({ Title:req.params.title }, function(err) {
  if (err)
  throw err;

  // we have deleted the user
  console.log('User deleted!');
  res.json("deleted");
});
});

// Fetching data through collection
 /*router.route('/read')
   .get(function(req,res){
result=[];
cursor=db.collection('moviedetails').find({},{__v:false, _id:false});
   cursor.forEach(function(data,err){
     if(err){
       console.log(err);
     }
     result.push(data);

   });
   console.log(result);
   res.json(result);
   });*/


module.exports = router;
