import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import store from './store'
import Root from './components/root'
import { BrowserRouter as Router } from 'react-router-dom';

render(
<Router>
  <Provider store={store}>
    <Root />
  </Provider>
</Router>,
  document.getElementById('main')
)
