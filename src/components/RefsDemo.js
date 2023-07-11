import React,{Component} from "react";
class RefsDemo extends Component{
    constructor(props){
        super(props)
        this.inuptRef=React.createRef()
        // this.cbRef=null
        // this.setCbRef=elment=>{
        //     this.cbRef=elment
        // }
        
    }
    componentDidMount(){
        // if(this.cbRef){
        //     this.cbRef.focus()
        // }
        this.inuptRef.current.focus()
        console.log(this.inuptRef)
    }
    clickHandler=()=>{
        alert(this.inuptRef.current.value)
    }
    render(){
        return(
            <div>
                <input type="text" ref={this.inuptRef}/>
                {/* <input type="text" ref={this.setCbRef}/> */}

                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}
export default RefsDemo