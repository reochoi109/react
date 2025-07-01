import { useState } from "react"

const EventFunc = () =>{
    
    const [form,setForm] = useState({
        username:"",
        message:"",
    })
    
    const {username,message} = form;
    
    const onChange = (e :any) =>{
        const nextForm = {
            ...form,
            [e.target.name]:e.target.value
        };
        setForm(nextForm)
    }

    const onClick = ()=>{
        alert(username + " : "+ message);
        setForm({
            username:"",
            message:"",
        })
    }


    const onKeyPress = (e :any) => {
        if (e.key == "Enter"){
            onClick();
        }
    };

    return (
        <div>

            <h1>Event</h1>
            <input type="text" name="username" value={username} placeholder="none" onChange={onChange} />
            <input type="text" name="message"  value={message}placeholder="message" onChange={onChange} onKeyDown={onKeyPress}/>
            <button onClick={onClick}>check</button>
        </div>
    )


}  
