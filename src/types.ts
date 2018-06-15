export interface State {
  count: number
}

export interface Actions {
  down (): State
  up (): State
}
