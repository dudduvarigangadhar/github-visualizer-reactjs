import {Switch, Route, Redirect} from 'react-router-dom'

import Analysis from './components/Analysis'
import Header from './components/Header'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Repository from './components/Repository'
import RepositoryItemDetails from './components/RepositoryItemDetails'
import './App.css'

const App = () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route exact path="/repository" component={Repository} />
    <Route
      exact
      path="/repositoryItemDetails"
      component={RepositoryItemDetails}
    />
    <Route exact path="/analysis" component={Analysis} />
    <Route exact path="/notfound" component={NotFound} />
    <Redirect to="/notfound" />
  </Switch>
)

export default App
