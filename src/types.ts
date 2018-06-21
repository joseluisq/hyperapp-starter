export interface State {
  count: number
}

export interface Actions {
  down (): State
  up (): State
}

export interface Label {
  label: number | string
}

export interface Button extends Label {
  disabled?: boolean
  action (): State
}

export interface Counter extends Actions, Label {}
