var React = require('react');
var ReactDOM = require('react-dom');
var Navbar=require('./components/Navbar.js')
var Childcomp=require('./components/Childcomponent.js')
var Childcomp2=require('./components/Childcomponent2.js')
var Maincomponent = React.createClass({
    getInitialState : function(){
    return{
        moviearr:[]
    }
},
getMovieData :function(title){
    $.ajax({
    url:'http://www.omdbapi.com/?s='+title,
    type: 'GET',
    dataType: 'JSON',/*what function is returning*/

   success: function(data)
   {
this.setState({moviearr:data.Search})

console.log(data);
   }.bind(this),
   error: function(err)
   {
     console.log(err);
   }.bind(this)
});
},
clickHand:function(d){
    this.getMovieData(d);
},
 render:function(){
   return (
   <div>
   <Navbar/>
   <h1 > Search Your Movie </h1>
   <Childcomp handleOnClick={this.clickHand} />
   <Childcomp2 chname={this.state.moviearr}/>
   </div>
   )
 }
});

ReactDOM.render(<Maincomponent/>,
document.getElementById('app'));
