import { Component, h } from 'hyperapp'
import { Button, Counter, Label } from '../../types'
import './style.scss'

export const CounterLabel: Component<Label> = ({ label }) => (
  <h1>{label}</h1>
)

export const CounterButton: Component<Button> = ({ label, action, disabled }) => (
  <button onclick={() => action()} disabled={disabled}>{label}</button>
)

export const CounterComponent: Component<Counter> = ({ label, up, down }) => (
  <div>
    <CounterLabel label={label} />
    <CounterButton label='-' action={down} disabled={label <= 0} />
    <CounterButton label='+' action={up} />
  </div>
)
