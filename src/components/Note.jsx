import { useState, React } from 'react';

const Note = ({ note, deleteNote, updateNotes }) => {
    const [modeEdit, setModeEdit] = useState(false);

    const [item, setItem] = useState(note);

    const toogle = (e) => {
        e.preventDefault();
        setModeEdit(!modeEdit)
        setItem(note)
    }

    const edit = (e) => {
        e.preventDefault();
        updateNotes(item);
        setModeEdit(false);
    }

    return (
        <div className='column is-one-third'>
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        Id: {note.id}
                    </p>

                </header>
                <div className="card-content">
                    <div className="field">
                        <div className="control">
                            {modeEdit ?
                                <label className='label'>
                                    Title
                                    <input className='input' type="text" value={item.title} onChange={(ev) => setItem({ ...item, title: ev.target.value })} />
                                </label>
                                : <div>Title: {note.title}</div>}
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            {modeEdit ?
                                <label className='label'>
                                    Description
                                    <textarea className='textarea' type="text" value={item.description} onChange={(ev) => setItem({ ...item, description: ev.target.value })}></textarea>
                                </label>
                                : <div>Description: {note.description}</div>}
                        </div>
                    </div>
                </div>
                <footer className="card-footer">
                    <a href="{'/'}" onClick={(e) => toogle(e)} className="card-footer-item">{modeEdit ? 'Cancel' : 'Edit'}</a>
                    {
                        modeEdit ?
                            <a href="{'/'}" onClick={(e) => edit(e)} className="card-footer-item">Save</a>
                            :
                            <a href="{'/'}" onClick={(e) => deleteNote(note.id,e)} className="card-footer-item">Delete</a>
                    }
                </footer>
            </div>
        </div>
    );
}

export default Note;
