import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
