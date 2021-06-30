import React, { useState } from 'react'
import {auth} from '../firebase';
import {useHistory} from 'react-router-dom'

export default function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            const result = await auth.signInWithEmailAndPassword(email,password)
            window.M.toast({html: `User Login Successfully `, classes: 'container rounded green'});
            window.M.toast({html: `Welcome! ${ result.user.email }`, classes: 'container rounded green'});
            history.push('/')
        }  catch(err){
            window.M.toast({html: err.message, classes: 'rounded red'});
        }
    }
    return (
        <div>
            <h3 className="loginhe">Please Login</h3>
            <form onSubmit={(e)=>handleSubmit(e)} className="loginhe">
                <div className="spaceone">
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" name="email" label="Email" variant="outlined" />
                </div>
                <div className="space">
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" name="password" label="Password" variant="outlined" />
                </div>
                <span id="span">
                <button type="submit" id="buttonn" className="buttonn btn blue">Log In</button>
                </span>
            </form>
        </div>
    )}

