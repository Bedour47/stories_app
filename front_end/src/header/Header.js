import React from 'react'
import { Link, Route } from 'react-router-dom'
import SignUp from '../../src/auth/components/SignUp'
import SignIn from '../../src/auth/components/SignIn'
import SignOut from '../../src/auth/components/SignOut'
import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    {/* <Link to="/change-password">Change Password</Link> */}
    <Link to="/sign-out">Sign Out</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <div>
    {/* <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link> */}
    {/* <button class="waves-effect waves-light btn-large"><Link to="/stories">View Stories</Link></button>
    <button class="waves-effect waves-light btn-large"><Link to="/sign-in">Sign In</Link></button> */}
    </div>
)

const alwaysOptions = (
  <React.Fragment>
    {/* <Link to="/">Home</Link> */}
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    <button><Link to="/">Stories</Link></button>
    
    <nav>
      { user && <span>Welcome, {user.username}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header
