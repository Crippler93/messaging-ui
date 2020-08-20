import * as React from 'react'
import { compProps } from './types'

import './styles.scss'

const Component = ({ show }: compProps) => (
  <div className={show ? 'loader' : ''}></div>
)

export default Component
