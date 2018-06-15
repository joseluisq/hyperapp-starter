import './app.css'
import { h, app, View } from 'hyperapp'
import { State, Actions } from './types'
import { Counter } from './store'

const view: View<State, Actions> = (state, actions) => (
  <main>
    <h1>{state.count + 1}</h1>
    <button onclick={ () => actions.down() } disabled={state.count <= 0}>-</button>
    <button onclick={ () => actions.up() }>＋</button>
  </main>
)

app<State, Actions>(
  Counter.state,
  Counter.actions,
  view,
  document.body
)
