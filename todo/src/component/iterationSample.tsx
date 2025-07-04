import { useState } from "react"

const IterationSample = () =>{
    const [names,setNames] = useState([
       {id:1,text:"ice"},
       {id:2,text:'snow'},
       {id:3,text:"wind"},
       {id:4,text:"man"},
    ])

    const [inputText,setInputText] = useState("");
    const [nextId,setNextId] = useState(5);
    
    const onChange = (e :any) =>{
        setInputText(e.target.value)
    }

    const onClick = (e :any) =>{
        const nextNames = names.concat({
            id: nextId,
            text:inputText,
        });

        setNextId(nextId+1);
        setNames(nextNames);
        setInputText("");
    };

    const onRemove = (id :any) =>{
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }


    const nameList = names.map((n)=><li key={n.id} onDoubleClick={()=>onRemove(n.id)} >{n.text}</li>)
    return(
        <div>
            <input type="text" value={inputText} onChange={onChange} />
            <button onClick={onClick}>ADD</button>
             <ul>{nameList}</ul>
        </div>
    )
}

export default IterationSample