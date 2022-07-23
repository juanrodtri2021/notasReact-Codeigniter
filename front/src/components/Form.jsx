import { useState, React } from 'react';
import axios from 'axios';

const Form = ({ notes, setNotes }) => {

    const initialNotes =
    {
        id: '',
        title: '',
        description: ''
    }
    const initialError =
    {
        title: '',
        description: ''
    }

    const [note, setNote] = useState(initialNotes);
    const [error, setError] = useState(initialError);

    const add = (ev) => {
        ev.preventDefault();
        axios.post('http://notes-api.test/api/notes', note)
            .then((payload) => {
                setNotes([
                    ...notes,
                    payload.data.data
                ]);
                setNote(initialNotes);
                setError(initialError);
            }).catch((errors) => {
                setError(errors.response.data.messages);
            });

        // if (note.title.trim() === "" || note.description.trim() === '') { return }
    }

    return (
        <div className='has-background-grey-dark has-text-success-light p-3 mt-2'>
            <form onSubmit={(ev) => add(ev)}>
                <div className='field'>
                    <label className='label has-text-success-light' htmlFor="title">Título</label>
                    <div className="control">
                        <input id="title" className='input' value={note.title} type="text" onChange={(ev) => setNote({ ...note, title: ev.target.value })} />
                    </div>
                    <span className="help is-danger">{error.title}</span>
                </div>
                <div className="field">
                    <label className='label has-text-success-light' htmlFor="descripction">Descripción</label>
                    <div className="control">
                        <textarea id="descripction" className='textarea is-info' value={note.description} type="text" onChange={(ev) => setNote({ ...note, description: ev.target.value })}></textarea>
                    </div>
                    <span className="help is-danger">{error.description}</span>
                </div>
                <div className="control">
                    <button className='button is-info'>Agregar</button>
                </div>
            </form>
        </div>
    );
}

export default Form;
