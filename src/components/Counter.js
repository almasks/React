import React,{Component} from "react";
class Counter extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    increment(){
       this.setState((prevState=>({
        count:prevState.count+1
       })),()=>{console.log("call",this.state.count)})
       console.log(this.state.count)
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()

    }
    
    render(){
        return(
            <div>
             <h1>count {this.state.count}</h1>
            <button onClick={()=>this.incrementFive()}>increment</button>
  
            </div>
             )
    }

}
export default Counter