import * as React from 'react'
import { useQuery } from 'react-query'

import { fetchAllStates } from '../../queries/state'

const Component = ({ children }: any) => {
  const { isLoading, error } = useQuery<any[], string>('states', fetchAllStates)
  console.log(children)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Something wrong happen try again</div>
  }

  return children
}

export default Component
