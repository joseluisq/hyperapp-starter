import { ActionsType } from 'hyperapp'
import { Actions, State } from '@app/types'

export namespace Store {
  export const state: State = {
    count: 0
  }

  export const actions: ActionsType<State, Actions> = {
    down: () => (state) => ({ count: state.count - 1 }),
    up: () => (state) => ({ count: state.count + 1 })
  }
}
