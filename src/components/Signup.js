import React, { useState } from 'react'
import {auth} from '../firebase';
import {useHistory} from 'react-router-dom'
export default function Signup(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            await auth.createUserWithEmailAndPassword(email,password)
            window.M.toast({html: `User Signup Successfully `, classes: 'container rounded green'});
            // window.M.toast({html: `Welcome! ${ result.user.email }`, classes: 'container rounded green'});
            history.push('/login')
        }  catch(err){
            window.M.toast({html: err.message, classes: 'rounded red'});
        }
    }
    return (
        <div>
            <h3 className="loginhe">Please Signup</h3>
            <form onSubmit={(e)=>handleSubmit(e)} className="loginhe">
                <div className="spaceone">
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email"  placeholder="Email" label="Email" variant="outlined" />
                </div>
                <div className="space">
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name="password" placeholder="Password" label="Password" variant="outlined" />
                </div>
                <span id="span">
                <button type="submit" id="buttonn" className="buttonn btn blue">Signup</button>
                </span>
            </form>
        </div>
    )}

