import * as React from 'react'
import Message from '../Message'

import './styles.scss'

type compProps = {
  messages: any[] | undefined
  isLoading: boolean
  error: any
}

const Component = ({ messages, isLoading, error }: compProps) => {
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
            messages?.map((message) => (
              <Message
                text={message.value}
                user={message.user}
                date={message.createdAt}
              />
            ))
          )}
        </>
      )}
    </div>
  )
}

export default Component
