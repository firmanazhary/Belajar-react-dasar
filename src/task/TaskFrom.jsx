import { useState } from "react";


export default function TaskForm({onSubmit}){
    const [item,setItem]= useState("");


    function handleChange(e){
        setItem(e.target.value);
    }
    function handleCLick(e){
        e.preventDefault();
        onSubmit(item);
        setItem("")
    } 
 return(
    <div>
        <h1>Create TASK</h1>
        <form>
            <input value={item} onChange={handleChange} />
            <button onClick={handleCLick}>Create</button>
        </form>
    </div>
 )
}