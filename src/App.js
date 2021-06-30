import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Todo from './components/Todo'
import Login from './components/Login';
import Signup from './components/Signup'
import { auth } from './firebase'

const App = () => {
  const [user,setUser] = useState(null)
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user) setUser(user)
      else setUser(null)
    })
  },[])

  return (
    <div>
      <BrowserRouter>
      <Navbar user={user}/>
      <Switch>
        <Route exact path="/">
          <Todo user={user}/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/signup">
          <Signup/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
