import { useState } from 'react'
import { Switch, Route, useHistory, withRouter } from 'react-router-dom'
import { Home, DashboardBtc, DashboardEth, DashboardXrp } from './containers'
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

    history.push('/dashboard/bitcoin')
  }

  return (
    <Switch>
      <Route exact path='/'>
        <Home handleInput={handleInput} redirect={redirect} />
      </Route>
      <Route exact path='/dashboard/bitcoin' component={DashboardBtc} />
      <Route exact path='/dashboard/ethereum' component={DashboardEth} />
      <Route exact path='/dashboard/ripple' component={DashboardXrp} />

    </Switch>
  );
}

export default withRouter(App);
