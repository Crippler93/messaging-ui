import * as React from 'react'
import { useQuery, queryCache } from 'react-query'

import { socket, killSocket } from '../../sockets'
import { fetchAllMessages } from '../../queries/message'
import MessagesContainer from '../../components/MessagesContainer'
import MessageInput from '../../components/MessageInput'

const hardcodedUser = {
  id: '5f35783d6fe70f23b8231b78'
}

const Chat = () => {
  const { isLoading, error, data: messages } = useQuery<any[], string>(
    'messages',
    fetchAllMessages
  )
  const [message, setMessage] = React.useState<string>('')

  React.useEffect(() => {
    socket.on('chat', (message: any) => {
      console.log('chat', message)
      queryCache.invalidateQueries('messages')
    })

    return function () {
      killSocket()
    }
  }, [])

  const handleSend = () => {
    console.log('Sending message:', message)
    socket.emit(
      'chat',
      JSON.stringify({ value: message, user: hardcodedUser.id })
    )
    setMessage('')
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value)
  }

  return (
    <>
      <MessagesContainer
        messages={messages}
        isLoading={isLoading}
        error={error}
      />
      <MessageInput
        onChange={handleChange}
        onSend={handleSend}
        text={message}
      />
    </>
  )
}

export default Chat
