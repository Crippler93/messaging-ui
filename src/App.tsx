import React, { MouseEvent } from 'react'
// Bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import { socket, killSocket } from './sockets'
import DirectMessage from './components/DirectMessages'
import InitialData from './components/InitialData'
import MessageInput from './components/MessageInput'
import MessagesContainer from './components/MessagesContainer'

function App() {
  const [message, setMessage] = React.useState<string>('')

  React.useEffect(() => {
    socket.on('FromAPI', (data: Date) => {
      console.log(data)
    })

    return () => {
      killSocket()
    }
  }, [])

  const handleSend = (event: MouseEvent<HTMLButtonElement>) => {
    console.log('Sending message:', message)
    socket.emit('chat', message)
    setMessage('')
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value)
  }

  return (
    <InitialData>
      <Container fluid>
        <Row style={{ minHeight: '100vh' }}>
          <Col md={3} style={{ backgroundColor: '#1F2326', color: '#fff' }}>
            <DirectMessage />
          </Col>
          <Col
            md={9}
            style={{
              backgroundColor: 'snow',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <MessagesContainer />
            <MessageInput
              onChange={handleChange}
              onSend={handleSend}
              text={message}
            />
          </Col>
        </Row>
      </Container>
    </InitialData>
  )
}

export default App
