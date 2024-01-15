import React, {useState, useEffect} from 'react'
import NoteItem from '../components/NoteItem'
const NotesListPage = () => {

    let [notes, setNotes] = useState([])
    useEffect(()=> {
        getNotes()
    }, [])

    let getNotes = async ()=> {
       let response = await fetch('/api/notes/')
       let data = await response.json()
       setNotes(data)
    }
  return (
    <div>
        <div className='noteslist'>
            {notes.map((note, index) => (
                <NoteItem key={index} note={note}/>
            ))}
        </div>
    </div>
  )
}

export default NotesListPage