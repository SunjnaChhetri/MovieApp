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
                alert(data);

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
            <div className="containerFluid">
            <div className="row">
            <div className="col-md-4">
            <div style={{backgroundColor:'#B2BABB'}} className="jumbotron text-center" >
            <img src = {this.props.poster}></img>
            </div>
            </div>
            <div className="col-md-4">
            <h3>{this.props.title}</h3>
            <p>Year : {this.props.year}</p>
            <p>ID : {this.props.imdbID}</p>
            <a href={this.buildLinkHref()} target='_blank' >
            <button className="btn btn-success"> View On Imdb </button>
            </a>
            <div className="col-sm-4">
            <button className="btn btn-info" onClick={this.addMovie}> Add </button>
            </div>


            </div>
            </div>
            </div>
        )
    }
});

module.exports=MovieDispalyBox;
