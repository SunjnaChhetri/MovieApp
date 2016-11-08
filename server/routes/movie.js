var express = require('express');
var router = express.Router();
var Movie=require('../models/movie')
var obj=[];
var flag=0;
/* POST home page. */
router.route('/add')
  .post(function(req,res)
{

                    var userVar = new Movie(req.body);
                    userVar.Comment="No comments";
                    JSON.stringify(userVar.Comment);
                    console.log("inside if");
                    userVar.save(function(err)
                    {
                        if(err)
                        {
                            console.log("Error");
                            res.send(err);
                        }
                        else
                        {
                            res.json("movie inserted");
                        }
                    });
            
});


router.route('/read')
  .get(function(req,res)
{
        Movie.find({},function(err,docs){
            if(err){
                res.json(err);
            }
            else {
                res.json(docs);
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


router.route("/update")
.put(function(req, res) {
      Movie.update({imdbID:req.body.imdbID},{Comment:req.body.Comment},function(err){
        if(err){
           console.log('error occured');
        }
        else{
              res.send('Movie Updated Successfully');
        }
});
});
router.route('/delete/:ImdbID')
.delete(function(req,res)
{
    Movie.findOneAndRemove({ imdbID:req.params.ImdbID }, function(err) {
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
