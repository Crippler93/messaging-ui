import React from 'react'

const initialContext: {
  block: boolean
  setBlock: any
} = {
  block: false,
  setBlock: null
}

export default React.createContext(initialContext)
