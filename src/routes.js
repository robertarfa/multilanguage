import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import About from './pages/About/About'
import Home from './pages/Home/Home'



export default function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/:lang" component={Home} /> */}
          <Route path="/About" component={About} />

          {/* <MultiLanguageRoute exact path="/:lang" component={HomePt} /> */}
        </Switch>
      </BrowserRouter>

    </div>
  )
}
