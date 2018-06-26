import { h, View, ActionsType } from 'hyperapp'
import { State, Actions } from './types'
import { Store } from './store'
import { CounterComponent as Counter } from './components/counter'
import './app.css'

export const state: State = Store.state
export const actions: ActionsType<State, Actions> = Store.actions

export const view: View<State, Actions> = ({ count }, actions) => (
  <main>
    <Counter label={count} {...actions} />
  </main>
)
