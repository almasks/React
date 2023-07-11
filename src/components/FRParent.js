import React,{Component} from "react";
import FRInput from "./FRInput";
class FRParent extends Component{
    constructor(props){
        super(props)
        this.inputRef=React.createRef()
        
    }
    changeFocus=()=>{
        this.inputRef.current.focus()
    }

    render(){
        return(
            <div>
                <FRInput ref={this.inputRef}/>
                <button onClick={this.changeFocus}>Focus Input</button>
            </div>
        )
    }
}
export default FRParent