import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import AlertDismissible from './auth/components/AlertDismissible'
import LastStoriesList from './components/LastStoriesList';
import StoryList from './components/profile/StoryList';
import Home from './Home'

import StoriesType from './components/StoriesType'
import TrueStories from './components/stories/TrueStories'
import Story from './components/Story'
import ImaginationStories from './components/stories/ImaginationStories';

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  render () {
    const { alerts, user, stories } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AlertDismissible key={index} variant={alert.type} message={alert.message} />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
        </main>

        <Route exact path='/' render={() => (
          <Home />
        )} />
        <Route path='/stories' render={() => (
          <StoriesType />
        )} />
        <Route path='/trueStories' render={() => (
          <TrueStories />
        )} />
        <Route path='/imaginationStories' render={() => (
          <ImaginationStories />
        )} />
        <Route path='/story/:id' render={() => (
          <Story />
        )} />
        

      </React.Fragment>
    )
  }
}

export default App
