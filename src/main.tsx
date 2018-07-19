import { app } from 'hyperapp'
import { Actions, State } from '@app/types'
import { actions, state, view } from '@app/app'

app<State, Actions>(state, actions, view, document.body)
