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

            < input type="text"   onChange={this.changeHand} />
             < input type="button"   className="btn btn-success" value="search" onClick={this.props.handleOnClick.bind(null,this.state.data)} />

   </div>
   )
 }
});
module.exports=Childcomponent;
