import { app } from 'hyperapp'
import { Actions, State } from './types'
import { actions, state, view } from './app'

app<State, Actions>(state, actions, view, document.body)
