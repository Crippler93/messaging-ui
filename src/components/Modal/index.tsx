import * as React from 'react'
import { compProps } from './types'
import Context from '../../context'

import './styles.scss'

const Component = ({ children }: compProps) => {
  const { showModal } = React.useContext(Context)
  return <div className={`Modal ${showModal ? '' : 'hide'}`}>{children}</div>
}

export default Component
