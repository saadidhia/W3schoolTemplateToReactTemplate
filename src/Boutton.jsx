import React from 'react'
class  Button extends React.Component{

    constructor(props){
        super(props)
        this.state={
            counter:props.counter
        }
    }

    addCounter=()=>{
        console.log('hi')
        this.setState({
            counter: this.state.counter+1
        })

    }
   render(){
    return (
      <div className="App">
       <button onClick={this.addCounter}>Counter</button>
       <p>{this.state.counter}</p>
        
  
      </div>
    );}
  }
  
  export default Button;
  