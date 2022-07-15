import { useState, React } from 'react';

const Form = ({ notes, setNotes }) => {

    const initialNotes =
    {
        id: '',
        title: '',
        description: ''
    }

    const [note, setNote] = useState(initialNotes);

    const add = (ev) => {
        ev.preventDefault();
        if (note.title.trim() === "" || note.description.trim() === '') { return }
        setNotes([
            ...notes,
            {
                ...note,
                id: notes.length > 0 ? Math.max(...notes.map(note => note.id)) + 1 : 1
            }
        ]);
        setNote(initialNotes);
    }

    return (
        <div className='has-background-grey-dark has-text-success-light p-3 mt-2'>
            <form onSubmit={(ev) => add(ev)}>
                <div className='field'>
                    <label className='label has-text-success-light' htmlFor="title">Título</label>
                    <div className="control">
                        <input id="title" className='input' value={note.title} type="text" onChange={(ev) => setNote({ ...note, title: ev.target.value })} />
                    </div>
                </div>
                <div className="field">
                    <label className='label has-text-success-light' htmlFor="descripction">Descripción</label>
                    <div className="control">
                        <textarea id="descripction" className='textarea is-info' value={note.description} type="text" onChange={(ev) => setNote({ ...note, description: ev.target.value })}></textarea>
                    </div>
                </div>
                <div className="control">
                    <button className='button is-info'>Agregar</button>
                </div>
            </form>
        </div>
    );
}

export default Form;
