var React = require('react');
var MovieDispalyBox=require('./MovieDispalyBox.js')
var Childcomponent2 = React.createClass({
 render:function(){
     var movieArray = this.props.chname.map(function (movie) {
         return(
             <MovieDispalyBox myObj={movie }title={movie.Title} year={movie.Year} imdbID={movie.imdbID} poster={movie.Poster }/>
         )

     })
   return (
   <div>
  {movieArray}
   </div>
   )
 }
});
module.exports=Childcomponent2;
