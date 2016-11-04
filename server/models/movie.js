var mongoose=require("mongoose");
var Schema= mongoose.Schema;

var movieDetailsSchema  =new Schema({
    Title:String,
    Year:String,
    imdbID:String,
    Poster:String,
    Type:String,
});

getMovies = mongoose.model('MovieDetails',movieDetailsSchema);
module.exports=getMovies;
