import { app, h, View } from 'hyperapp'
import { Actions, State } from '../src/types'
import { actions, state } from '../src/app'
import { CounterLabel } from '../src/components/counter'

const myState: State = { count: 0 }

test('state should be defined', () => {
  expect(state).toBeTruthy()
  expect(state).toEqual(expect.objectContaining(myState))
})

function equalTo (expected: string, done: Function) {
  expect(document.body.innerHTML).toBe(expected)
  done()
}

test('debouncing', (done: Function) => {
  const view: View<State, Actions> = ({ count }, actions) => (
    <main oncreate={() => equalTo('<main><h1>1</h1></main>', done)}>
      <CounterLabel label={count} {...actions} />
    </main>
  )

  app<State, Actions>(state, actions, view, document.body).up()
})

test('returning null from a component', (done) => {
  const NullComponent = () => null

  const view = () => (
    <div
      oncreate={() => {
        expect(document.body.innerHTML).toBe('<div></div>')
        done()
      }}
    >
      <NullComponent />
    </div>
  )

  app(null, {}, view, document.body)
})
