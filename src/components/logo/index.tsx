import { Component, h } from 'hyperapp'
import logo from '../../../public/assets/images/logo.png'
import './style.scss'

export const Logo: Component = () => (
  <a href='https://hyperapp.js.org/' target='_blank'>
    <img src={logo} />
  </a>
)
