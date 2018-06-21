import './app.css'
import { h, app, View } from 'hyperapp'
import { State, Actions } from './types'
import { Store } from './store'
import { CounterComponent as Counter } from './components/counter'

const { state, actions } = Store

const view: View<State, Actions> = ({ count }, actions) => (
  <main>
    <Counter label={count} disabled {...actions} />
  </main>
)

app<State, Actions>(
  state,
  actions,
  view,
  document.body
)
