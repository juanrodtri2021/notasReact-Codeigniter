import React from 'react';
import Note from './Note';

const Notes = ({notes,setNotes}) => {

    const deleteNote = (id,e) => {
        e.preventDefault();
        const newNotes = notes.filter(note => id !== note.id)
        setNotes(newNotes);
    }

    const updateNotes = (newNote) => {
        setNotes(
            notes.map(note => note.id === newNote.id ? newNote : note)
        );
        
    }
     
    return (
        <div className='columns is-multiline'>
        {
            notes.map(note =>{
                return <Note key={note.id} note={note} deleteNote={deleteNote} updateNotes={updateNotes}/>
            })
        }
        </div>
    );
}

export default Notes;
