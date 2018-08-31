import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Campuses from './Campuses';
import Students from './Students'

// import {NavLink} from 'react-router-dom'

const Root = () => {
  return (
    <div>
      <nav>
        Welcome!
      </nav>
      <main>
      <Switch>
            <Route path="/campus" component={Campuses} />
            <Route path="/students" component={Students} />
      </Switch>
        <h1> Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
        <p>This seems like a nice place to get started with some Routes!</p>
      </main>
    </div>
  )
}

export default Root

