import * as React from 'react'
import { useQuery } from 'react-query'

import { fetchAllUsers } from '../../queries/user'
import State from '../State'
import Collapsible from '../Collapsible'

import './styles.scss'

const Component = () => {
  // TODO: Replace user query for room
  const { isLoading, error, data: users } = useQuery<any[], string>(
    'users',
    fetchAllUsers
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Something wrong happen try again</div>
  }

  return (
    <Collapsible activeKey="0" title="Chat rooms">
      {users?.map((user) => (
        <div key={user._id}>
          <State id={user.state_id} className="mr" />
          {`${user.first_name} ${user.last_name}`}
        </div>
      ))}
    </Collapsible>
  )
}

export default Component
