var React = require('react');
var {Link}= require('react-router');
var Navbar = React.createClass({
render:function(){
   return (
   <div className="containerFluid">
    <div className="navbar navbar-default">
        <div className="container-fluid">
<ul className="nav navbar-nav " >
<li><Link to="/">MovieAapp</Link></li></ul>

<ul className="nav navbar-nav navbar-right">
     <li><Link to="/Contact">Contact</Link></li>
     <li><Link to="/ListFav">My Favourite Movies</Link></li></ul>
</div>
</div>
   </div>
   )
 }
});
module.exports=Navbar;
