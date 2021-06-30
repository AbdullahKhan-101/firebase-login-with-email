import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button';
import { db } from '../firebase';
import { useHistory } from 'react-router-dom';
const Todo = ({user}) => {

    const [text, setText] = useState('');
    const [mytodos, setMytodos] = useState([]);
    const history = useHistory();

    useEffect(()=>{
        if(user){
            const docRef = db.collection('todos').doc(user.uid)
            docRef.onSnapshot(docSnap=>{
            if(docSnap.exist){
                console.log(docSnap.data().todos)
                setMytodos(docSnap.data().todos)
            } else{
                console.log("no docs")
            }
            })
        } else {
            history.push('/login')
        }
    },[])

const addTodo =  () =>{
    db.collection('todos').doc(user.uid).set({
        todos:[...mytodos, text]
    })}
return (
        <div>
            <h1 className="todo">Add  Todos</h1>
            <div className="spaceone todo">
            <input className="todo" value={text} onChange={(e)=>setText(e.target.value)} type="text" placeholder="Add Todo..." name="text" label="Email" variant="outlined" />
            <ul> 
                <li> asdfkj
                    <span id="spannn"> x </span>
                 </li> 
            </ul> 

            <div id="btnkidiv">
            <Button onClick={()=>addTodo()} id="btnnn" variant="contained" color="primary">
                add todo
            </Button>
            </div>            
            </div>
        </div>
    )
}

export default Todo
