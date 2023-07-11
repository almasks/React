import React,{Component} from "react";
import RegularComponent from "./RegularComponent";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";
class ParentComponentp extends Component{
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
                <MemoComp name={this.state.name}/>
                {/* <RegularComponent name={this.state.name}/>
                <PureComp name={this.state.name}/> */}


            </div>
        )
    }
}
export default ParentComponentp