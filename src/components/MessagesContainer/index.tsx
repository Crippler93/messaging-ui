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
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <div className="body">
          {error ? (
            <span>Something went wrong</span>
          ) : (
            messages?.map((message) => (
              <Message
                key={message._id}
                text={message.value}
                user={message.user}
                date={message.createdAt}
              />
            ))
          )}
        </div>
      )}
    </div>
  )
}

export default Component
