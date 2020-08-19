import * as React from 'react'
import { fetchAllMessages } from '../../queries/message'
import { useQuery } from 'react-query'

import './styles.scss'

const Component = () => {
  const { isLoading, error, data: messages } = useQuery<any[], string>(
    'messages',
    fetchAllMessages
  )

  return (
    <div className="MessageContainer">
      <span>Messages:</span>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <>
          {error ? (
            <span>Something went wrong</span>
          ) : (
            messages?.map((message) => <span>{message.value}</span>)
          )}
        </>
      )}
    </div>
  )
}

export default Component
