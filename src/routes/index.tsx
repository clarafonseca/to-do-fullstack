import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import TaskList from '../pages/TaskList'

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/task-list/:id" component={TaskList} exact />
    </Switch>
  </BrowserRouter>
)

export default Routes
