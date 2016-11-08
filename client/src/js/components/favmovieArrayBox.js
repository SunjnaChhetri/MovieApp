var React = require('react');
var favmovieArrayBox= React.createClass({
    getInitialState : function(){
        return{commentData:null};
    },

    textChange : function(event){
    this.setState({commentData:event.target.value});
},


updateComment : function(){
    var com = prompt("Enter a comment",this.props.comment);
    if(com!=null)
    {
        var obj={imdbID:this.props.imdbID,Comment:com}
        this.updatefun(obj);


    }
},


updatefun : function(d){
var    updateRender=this.props.updateTemp.bind(null,d);
    $.ajax({
    url:'http://localhost:8080/movie/update',
    type: 'PUT',
    data : d,
    success: function(data)
    {
       updateRender();
    console.log(data);
    }.bind(this),
    error: function(err)
    {
     console.log(err);
    }.bind(this)
    });
},
    delMovie : function(){
        var redel=this.props.del.bind(null,this.props.imdbID);
        $.ajax({
        url:'http://localhost:8080/movie/delete/' + this.props.imdbID,
        type: 'DELETE',
        success: function(data)
       {
           redel();
    console.log(data);
       }.bind(this),
       error: function(err)
       {
         console.log(err);
       }.bind(this)
    });
    },

    render : function(){
        console.log("Fav movie");
        return(
            <div className="containerFluid">
            <div className="row">
            <div className="col-md-4">
            <div style={{backgroundColor:'#B2BABB'}} className="jumbotron text-center" >
            <img src = {this.props.poster}></img></div>
            </div>
            <div className="col-md-4">
            <h2>{this.props.title}</h2>
            <p>Year : {this.props.year}</p>
            <p>ID : {this.props.imdbID}</p>
            <p>Comment : {this.props.comment}</p>
            <div className="col-sm-4">
        <button className="btn btn-warning" onClick={this.updateComment}> Update Comment </button></div>
        <div className="col-sm-4">
        <button className="btn btn-danger"  onClick={this.delMovie}> Delete </button>
            </div>
            </div>
            </div>

            </div>
        )
    }
});

module.exports=favmovieArrayBox;
