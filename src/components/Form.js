import React,{Component} from "react";
class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            username:"",
            comments:"",

        }
    }
    handleChangeUser=(event)=>{
        this.setState({
            username:event.target.value
        })

    }
    handleChangeComment=(event)=>{
        this.setState({
            comments:event.target.value
        })

    }
    handleSubmit=event=>{
        alert(`${this.state.username} is commented ${this.state.comments}`)
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.handleChangeUser}/>
                  </div>
                  <div>
                    <label>Comments</label>
                    <input type="text" value={this.state.comments} onChange={this.handleChangeComment}/>
               
                  </div>
                  <button type="submit">Submit</button>
    
            </form>
        )
        
}
}
export default Form