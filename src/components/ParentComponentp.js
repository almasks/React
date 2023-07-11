import React,{PureComponent} from "react";
import RegularComponent from "./RegularComponent";
import PureComp from "./PureComp";
class ParentComponentp extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            name:"vishwas"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"vishwas"
            })
        },2000)
    }
    render(){
        console.log("******parent render**********");
        return(
            <div>
                parent Component
                <RegularComponent name={this.state.name}/>
                <PureComp name={this.state.name}/>


            </div>
        )
    }
}
export default ParentComponentp