import { app } from 'hyperapp'
import { State, Actions } from './types'
import { state, actions, view } from './app'

app<State, Actions>(
  state,
  actions,
  view,
  document.body
)
