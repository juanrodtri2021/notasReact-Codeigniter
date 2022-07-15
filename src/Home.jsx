import {useState,React} from 'react';
import Form from './components/Form';
import Notes from './components/Notes';
//index.js*
//|
//|--Dashboard
//  |
//  |--Form
//  |--Notes
//         |
//         |--Note
export default function Dashboard() {

    const [notes, setNotes] = useState(
        [
            {id:1,title:'note_1',description:'lorem ipsum'},
            {id:2,title:'note_2',description:'lorem ipsum'},
            {id:3,title:'note_3',description:'lorem ipsum'},
            {id:4,title:'note_4',description:'lorem ipsum'},
            {id:5,title:'note_5',description:'lorem ipsum'}
        ]
    );

    // const changeState = () => {
    //     const registro = {id:6,title:'note_6',description:'lorem ipsum'};
    //     setNotes(notes.concat(registro));
    // }
    
    return(
        <div className='container'>
            <h1 className='title has-text-centered mt-3'>Lista de Notas</h1>
            <Notes notes={notes} setNotes={setNotes}/>
            <Form notes={notes} setNotes={setNotes}/>
            {/* <button onClick={() => changeState()}>Change state</button> */}
        </div>
    )
}