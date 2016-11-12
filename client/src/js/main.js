var React = require('react');
var ReactDOM = require('react-dom');
var {browserHistory,Route,Router,IndexRoute} =require('react-router');
var Navbar=require('./components/Navbar.js')
var LoginComp=require('./components/login')
var LogoutComp=require('./components/logout')
var Childcomp=require('./components/Childcomponent.js')
var Childcomp2=require('./components/Childcomponent2.js')
var listfav=require('./components/listfav')
var Contact=require('./components/contact')
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
       if(data.Response=='False')
       {
           alert(data.Error)
       }
       else {
           this.setState({moviearr:data.Search})

       }

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
   <div >
   <Navbar/>
   <Childcomp handleOnClick={this.clickHand} />
   <Childcomp2 chname={this.state.moviearr}/>
       {this.props.children}
   </div>
   )
 }
});

ReactDOM.render(
<Router history={browserHistory}>
<Route path="/" component={Maincomponent}/>
<Route path="/ListFav" component={listfav}/>
<Route path="/Contact" component={Contact}/>
<Route path="/Login" component={LoginComp}/>
<Route path="/Logout" component={LogoutComp}/>
</Router>,document.getElementById('app'));
