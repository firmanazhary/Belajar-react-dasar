import { useContext } from "react"
import Note from "./Note"
import { NoteContext } from "./NoteContex"
export default function(){
    const notes = useContext(NoteContext)
return (
    <ul>
        {notes.map(note=>(
            <li key={note.id}>
                <Note note={note} />
            </li>
        ))}
    </ul>
)
}