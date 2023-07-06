import React,{Component} from "react";
import ChildComponent from "./ChildComponent";
class ParentComponent extends Component{
    constructor(){
        super()
        this.state={
            parentName:"parent"
        }
        this.greetParent=this.greetParent.bind(this)
    }
    greetParent(childName,grandchild){
        alert(`Hello ${this.state.parentName} from ${childName} form ${grandchild}`)
    }
    render(){
        return(
            <div>
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}
export default ParentComponent