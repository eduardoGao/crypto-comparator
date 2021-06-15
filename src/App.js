import { useState } from 'react'
import { Switch, Route, useHistory, withRouter } from 'react-router-dom'
import { Home, Dashboard } from './containers'
import './App.css';

function App() {
  const history = useHistory()
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const redirect = () => {
    localStorage.setItem('user', JSON.stringify(user))

    history.push('/dashboard')
  }

  return (
    <Switch>
      <Route exact path='/'>
        <Home handleInput={handleInput} redirect={redirect} />
      </Route>
      <Route exact path='/dashboard'>
        <Dashboard />
      </Route>
    </Switch>
  );
}

export default withRouter(App);
