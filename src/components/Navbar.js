import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import { auth } from '../firebase'
const Navbar = ({user}) => {
    const history = useHistory()
    return (
        <div>
        <nav>
      <div className="nav-wrapper blue">
          <Link to="/" className="brand-logo app">Todo App</Link>
      <ul id="nav-mobile" className="right links">
        {
        user ? 
        <li>
            <button onClick={()=>{
            auth.signOut();
            history.push('/login')
            }} className="btn blue">Log out</button>
        </li>
             : 
        <> 
        <li className="login"><Link to="/login">Login</Link></li>
        <li className="login"><Link to="/signup">Signup</Link></li>
        </>
        }
        
        
      </ul>
    </div>
  </nav>
</div>
    )
}

export default Navbar
