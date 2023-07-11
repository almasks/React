import React,{Component} from "react";
class LifeCycleB extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"Vishwas"
        }
        console.log("Constructor LifeCycleB");
    }
    
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFrom props LifecycleB");
        return null
    }
    shouldComponentUpdate(){
        console.log("shouldcomponentupdate LifecycleB")
        return true
    }
    getSnapshotBeforeUpdate(prevProp,prevState){
        console.log("getSnapshotbeforeupdate LifecycleB")
        return null
    }
    componentDidUpdate(){
        console.log("componet did update LifecycleB")

    }
    componentDidMount(){
        console.log("componentDidMount LifecycleB");
    }
    render(){
        console.log("render Lifecycle B")

        return(
                <div>
                   LifeCycle B
                </div>
        )
    }
}
export default LifeCycleB