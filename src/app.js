import './app.css'
import { h, app } from 'hyperapp'

const state = {
  count: 0
}

const actions = {
  down: () => state => ({ count: state.count - 1 }),
  up: () => state => ({ count: state.count + 1 })
}

const view = (state, actions) => (
  <main>
    <h1>{state.count + 1}</h1>
    <button onclick={() => actions.down(1)} disabled={state.count <= 0}>-</button>
    <button onclick={() => actions.up(1)}>＋</button>
  </main>
)

export const main = app(state, actions, view, document.body)
