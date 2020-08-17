import * as React from 'react'
import { useQuery } from 'react-query'

import { fetchAllStates } from '../../queries/state'

import './style.scss'

const State = ({
  id,
  style = {},
  className = ''
}: {
  id: string
  style?: any
  className?: string
}) => {
  const { data: states } = useQuery<any[], string>('states', fetchAllStates)

  const state = states?.find((state) => state._id === id)

  switch (state.value) {
    case 'Online':
      return <div className={`state online ${className}`} style={style} />
    case 'Offline':
      return <div className={`state offline ${className}`} style={style} />
    default:
      return <div className={`state ${className}`} style={style} />
  }
}

export default State
