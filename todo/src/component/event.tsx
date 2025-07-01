import { Component } from "react";

class Event extends Component{

    state = {
        username: "",
        message : "",
        
    }

    handleChange= (e :any)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    
    handleClick = ()=>{
        alert(this.state.message + ' ' + this.state.username)
        this.setState({
            username:"",
            message:"",
        })
    }

    handleKeyPress = (e:any) => {
        if (e.key === "Enter"){
            this.handleClick()
        }
    }


        render(){

        return (
            <div>
                <h1>event</h1>
                <input type="text" name="message" placeholder="none" value={this.state.message} onChange={this.handleChange}/>
                <input type="text" name="username" placeholder="none" value={this.state.username} onChange={this.handleChange} onKeyDown={this.handleKeyPress}/>
                <button onClick={this.handleClick}>check</button>
            </div>
        )
    }
}

export default Event