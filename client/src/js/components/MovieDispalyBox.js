var React = require('react');
var MovieDispalyBox = React.createClass({
    buildLinkHref: function(){
    return ('http://www.imdb.com/title/'+this.props.imdbID);
 },
 addMovie : function(){
    var moviedata=this.props.myObj;
     $.ajax({
     url:'http://localhost:8080/movie/add',
     type: 'POST',
     data: moviedata ,

    success: function(data)
    {
 alert("inserted successfully")

 console.log(data);
    }.bind(this),
    error: function(err)
    {
      console.log(err);
    }.bind(this)
 });
},

    render : function(){
        return(
            <div className="container-fluid">
            <div className="row">
            <div className="col-md-4">
            <img src = {this.props.poster}></img>
            </div>
            <div className="col-md-4">
            <h1>{this.props.title}</h1>
            <p>{this.props.year}</p>
            <p>{this.props.imdbID}</p>
            <a href={this.buildLinkHref()} target='_blank' >
            <button className="btn btn-success"> View On Imdb </button>
            </a>
            <div className="col-md-4">
            <button className="btn btn-info" onClick={this.addMovie}> Add </button>
            </div>

            </div>
            </div>
            </div>
        )
    }
});

module.exports=MovieDispalyBox;
