var React = require('react');
var NavBar = require('./NavBar.js');
var {browserHistory} = require('react-router');
var login = React.createClass({


    loginFunction : function(){

            var name = this.refs.user.value;
            alert(name);
                var pass = this.refs.pass.value;
                alert(pass);

                var object1 = {"username":name,"password":pass};
        $.ajax({
        url:'http://localhost:8080/login',
        type: 'POST',
        data: object1,
           success: function(data)
           {
           console.log(data);
           browserHistory.push('/');
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
   <h2>SIGN IN</h2>
  <p> UserName : < input type="text" ref="user"  size="50"  onChange={this.changeName} /></p><p></p>
    <p>Password : < input type="password" ref="pass" size="50"  onChange={this.changePass} /></p>
    <p></p>
    <p>< input type="button" className="btn btn-success" value="sign in"  onClick={this.loginFunction} size="50"  /></p>

   </div>
   </div>
   )
 }
});
module.exports=login;
