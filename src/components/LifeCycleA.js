import React,{Component} from "react";
import LifeCycleB from "./LifeCycleB";
class LifeCycleA extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"Vishwas"
        }
        console.log("Constructor LifeCycleA");
    }
    changeName=()=>{
        this.setState({
            name:"welcome"
        })
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFrom props LifecycleA");
        return null
    }
    componentDidMount(){
        console.log("componentDidMount LifecycleA");
    }
    shouldComponentUpdate(){
        console.log("shouldcomponentupdate LifecycleA")
        return true
    }
    getSnapshotBeforeUpdate(prevProp,prevState){
        console.log("getSnapshotbeforeupdate LifecycleA")
        return null
    }
    componentDidUpdate(){
        console.log("componet did update LifecycleA")

    }
    
    render(){
        console.log("render Lifecycle A")

        return(
                <div>
                   LifeCycle A
                    <LifeCycleB/>
                    <button onClick={this.changeName}>Submit</button>
                </div>
        )
    }
}
export default LifeCycleA