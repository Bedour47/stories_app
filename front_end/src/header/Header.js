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
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                     <div class="container">
                     <button class="btn btn-primary marg"><Link to="/stories">View Stories</Link></button>
                       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                         <span class="navbar-toggler-icon"></span>
                       </button>
                       <div class="collapse navbar-collapse" id="navbarResponsive">
                           <button class="btn btn-primary " id="sinIn"><Link to="/sign-in">Sign In</Link></button>
                       </div>
                       <button class="btn btn-primary" id="home"><Link to="/">Home</Link></button>

                     </div>
                   </nav>
    <nav>
      { user && <span>Welcome, {user.username}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header
