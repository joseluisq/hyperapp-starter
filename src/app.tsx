import './app.css'
import { h, app, ActionsType, View } from 'hyperapp'

namespace Counter {
  export interface State {
    count: number
  }

  export interface Actions {
    down (): State
    up (): State
  }

  export const state: State = {
    count: 0
  }

  export const actions: ActionsType<State, Actions> = {
    down: () => (state) => ({ count: state.count - 1 }),
    up: () => (state) => ({ count: state.count + 1 })
  }
}

const view: View<Counter.State, Counter.Actions> = (state, actions) => (
  <main>
    <h1>{state.count + 1}</h1>
    <button onclick={ () => actions.down() } disabled={state.count <= 0}>-</button>
    <button onclick={ () => actions.up() }>＋</button>
  </main>
)

app<Counter.State, Counter.Actions>(
  Counter.state,
  Counter.actions,
  view,
  document.body
)
