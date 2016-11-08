var React = require('react');
var Childcomponent = React.createClass({

    changeHand :function(event){
        this.setState({data:event.target.value});
    },
    getInitialState : function(){
    return{data:null}
},

render:function(){
   return (
   <div>
    <div style={{backgroundColor:'#B2BABB'}} className="jumbotron text-center" >
        <h1>Search Your Movie</h1>
        <p>Enter movie name</p>
        < input type="text"   size="50"  onChange={this.changeHand} />
         < input type="button"   className="btn btn-success" value="search" onClick={this.props.handleOnClick.bind(null,this.state.data)} />
    </div>
    </div>

   )
 }
});
module.exports=Childcomponent;
