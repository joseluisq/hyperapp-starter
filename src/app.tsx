import { ActionsType, h, View } from 'hyperapp'
import { Actions, State } from './types'
import { Store } from './store'
import { CounterComponent as Counter } from './components/counter'
import { Logo } from './components/logo'
import './styles/style.scss'

export const state: State = Store.state
export const actions: ActionsType<State, Actions> = Store.actions

export const view: View<State, Actions> = ({ count }, actions) => (
  <main>
    <p><Logo /></p>
    <Counter label={count} {...actions} />
  </main>
)
