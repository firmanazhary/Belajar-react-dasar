import { useContext, useState } from "react";
import { NoteDispatchContext } from "./NoteContex";

export default function NoteForm(){

    const [text,setText]= useState('');
    const dispatch = useContext(NoteDispatchContext)
    function handleChange(e){
     
        setText(e.target.value)
    }
     function handleCLick(){
            dispatch ({
                type:"ADD_NOTE",
                text:text
            });
           setText("") 
        }
    return(<>
    
    <input placeholder="Add note"  value={text} onChange={handleChange}/>
    <button onClick={handleCLick}>Add</button>
    </>)
}