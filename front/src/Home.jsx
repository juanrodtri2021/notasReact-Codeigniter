import {useState,useEffect,React} from 'react';
import Form from './components/Form';
import Notes from './components/Notes';
import axios from 'axios';
//index.js*
//|
//|--Dashboard
//  |
//  |--Form
//  |--Notes
//         |
//         |--Note
export default function Dashboard() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        axios.get('http://notes-api.test/api/notes')
        .then((payload)=> {
            setNotes(payload.data);
        }).catch((error)=>{
            console.log(error);
        })
    }, []);
    

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