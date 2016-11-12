var React = require('react');

var logout = React.createClass({
    componentDidMount : function(){
        this.logoutFunction();
    },
    logoutFunction: function(){
        $.ajax({
        url:'http://localhost:8080/logout',
        type: 'POST',

           success: function(data)
           {
           console.log(data);

           }.bind(this),
           error: function(err)
           {
            console.log(err);
           }.bind(this)
    });
},
 render:function(){
   return (
   <div>
    <NavBar/>
   <div style={{backgroundColor:'#B2BABB'}} className="jumbotron text-center" >
   <h2>You have successfully SIGNED OUT</h2>
   </div>
   </div>
   )
 }
});
module.exports=logout;
