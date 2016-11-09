var should = require("chai").should(),
// expect = require("chai").expect,
// assert = require("chai").assert,
supertest = require("supertest"),
app = require("../bin/www");

var url = supertest("http://localhost:8080/movie");

describe("Testing add movies", function(err){
 it("should respond", function(done){
   url
   .post("/add")
   .expect(200)
   .send({
     "Title":"Sultan",
     "Year" :"2016",
     "imdbID":"tt4832640",
     "Type":"movie",
     "Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BOWY3MmVmMGQtYTIyMS00ODc2LWI4N2YtMjA1MmY1YjA3MzVlXkEyXkFqcGdeQXVyMTkzOTcxOTg@._V1_SX300.jpg "
   })
   .end(function(err,res){
     res.text.should.be.equal("movie inserted");
     done();
   });
 });
});


describe("Testing the update movies", function(err){
  it("should handle and send the computed info", function(done){
    url
        .put("/update")
        .expect(200)
        .send({
            "Comment":"hello",
          "Title":"Sultan",
          "Year" :"2016",
          "imdbID":"tt4832640",
          "Type":"movie",
          "Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BOWY3MmVmMGQtYTIyMS00ODc2LWI4N2YtMjA1MmY1YjA3MzVlXkEyXkFqcGdeQXVyMTkzOTcxOTg@._V1_SX300.jpg "
        })
        .end(function(err,res){
          should.not.exist(err);
              res.text.should.be.equal("Movie Updated Successfully");
          done();
        });

  });
});


describe("Testing the read movies", function(err){
  it("should handle and send the computed info", function(done){
    url
        .get("/read")
        .expect(200)
        .expect('Content-Type', /json/ )
        .end(function(err,res){
         var Obj=   JSON.parse(res.text);
         Obj.should.be.instanceOf(Array);
          done();
        });

  });
});


describe("Testing the delete movies", function(err){
  it("should handle and send the computed info", function(done){
    url
    .delete("/delete/tt4832640")
   .expect(200)
   .end(function(err,res){
     should.not.exist(err);
    res.text.should.be.equal("deleted");
     done();
   });

  });
});
