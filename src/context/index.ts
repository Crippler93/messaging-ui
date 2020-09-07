import React from 'react'
import { contextProps } from './types'

const initialContext: contextProps = {
  block: false,
  setBlock: null,
  showModal: false,
  setShowModal: null
}

export default React.createContext(initialContext)
