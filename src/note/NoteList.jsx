import { useContext } from "react"
import Note from "./Note"
import { NoteContext } from "./NoteContex"
import { useMemo } from "react"
import { useRef } from "react"
import { useState } from "react"
export default function(){
    const notes = useContext(NoteContext);
    const [search,setSearch] = useState("");
    const searchInput = useRef(null);

    const filteredNotes =useMemo(()=>{
        console.log("Filtering notes for search:", search);
        return notes.filter(note=> note.text.includes(search));
    },[notes,search])

    function handleSearch(){
        console.log("Searching for:", search);
        setSearch(searchInput.current.value);
    }
return (
   <div>
    <input ref={searchInput} placeholder="search" />
    <button onClick={handleSearch}>Search</button>
     <ul>
        {filteredNotes.map(note=>(
            <li key={note.id}>
                <Note note={note} />
            </li>
        ))}
    </ul>
   </div>
)
}