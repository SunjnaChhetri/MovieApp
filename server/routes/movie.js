var express = require('express');
var router = express.Router();
var Movie=require('../models/movie')
var obj=[];
var flag=0;
/* POST home page. */
router.route('/add')
  .post(isLoggedIn,function(req,res)
{
if(req.body)
{
    var obj={'imdbID':req.body.imdbID}
                    var userVar = new Movie(req.body);
                    userVar.Comment="No comments";
                    JSON.stringify(userVar.Comment);
                    Movie.findOne(obj,function(err,data)
                {
                    if (data)
                    {
                        res.send("movie already exists");
                    }
                    else {
                        userVar.save(function(err)
                        {
                            if(err)
                            {
                                console.log("Error");
                                res.send(err);
                            }
                            else
                            {
                                res.send('movie inserted');
                            }
                        });

                    }
                })

                }

});


router.route('/read')
  .get(isLoggedIn,function(req,res)
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
.put(isLoggedIn,function(req, res) {
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
.delete(isLoggedIn,function(req,res)
{
    Movie.findOneAndRemove({ imdbID:req.params.ImdbID }, function(err) {
  if (err)
  {
      res.send("error");
  throw err;
  }
  else {
      // we have deleted the user
      console.log('User deleted!');
      res.send("deleted");

  }


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

function isLoggedIn(req,res,next){
    if(req.isAuthenticated())
    {
        return next();

    }
    else {
        res.json('not authenticated');
    }
}
module.exports = router;
