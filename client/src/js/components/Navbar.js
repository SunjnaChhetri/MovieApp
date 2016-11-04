var React = require('react');
var Navbar = React.createClass({
render:function(){
   return (
   <div className="Container">
    <div className="navbar navbar-default">
        <div className="container-fluid">
<div classNmae="navbar-header">
<a className="navbar-brand" href="#">WebSiteName</a>
</div>
<ul className="nav navbar-nav">
<li className="active"><a href="#">Home</a></li>
<li><a href="#">Page 1</a></li>
<li><a href="#">Page 2</a></li>
<li><a href="#">Page 3</a></li>
</ul>
</div>
</div>
   </div>
   )
 }
});
module.exports=Navbar;
