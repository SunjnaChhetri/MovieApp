var React = require('react');
var Navbar=require('./Navbar.js')
var FavmovieArrayBox=require('./favmovieArrayBox.js')
var listfav= React.createClass({
    getInitialState : function(){
    return{
        favmoviearr : []
    }
},
    componentDidMount : function(){
        this.listMovies();
    },

    deleteFunction:function(imdbID){
       var temp = this.state.favmoviearr;
       var j=-1;
      for(var i=0;i<temp.length;i++){
        if(temp[i].imdbID==imdbID)
          {
             j=i;
             break;
          }
       }
        if(j>-1){
        temp.splice(j,1);
      }
      this.setState({favmoviearr:temp});
    },


    updateFunction:function(d){
       var temp = this.state.favmoviearr;
      for(var i=0;i<temp.length;i++){
        if(temp[i].imdbID==d.imdbID)
          {
             temp[i].Comment=d.Comment;
             break;
          }
       }
      this.setState({favmoviearr:temp});
    },

    listMovies: function(){
        $.ajax({
        url:'http://localhost:8080/movie/read',
        type: 'GET',
        dataType: 'JSON',
        async:false,
       success: function(data)
       {
          this.setState({favmoviearr:data})
          console.log(data);
       }.bind(this),
       error: function(err)
       {
         console.log(err);
       }.bind(this)
    });
    },
    render:function(){
         var favmovieArray;
         if(this.state.favmoviearr.length==0)
        {
            favmovieArray= <h1>No records found...</h1>
        }
        else{
                 var tempfun=this.deleteFunction;
                 var up=this.updateFunction;
     favmovieArray = this.state.favmoviearr.map(function (movie) {
            return(
                <FavmovieArrayBox del={tempfun} updateTemp={up} favMyObj={movie} title={movie.Title} year={movie.Year} imdbID={movie.imdbID} poster={movie.Poster } comment={movie.Comment}/>
            );
        });
    }
      return (
      <div>
      <Navbar/>
     {favmovieArray}
      </div>
      )
    }
});
module.exports=listfav;
