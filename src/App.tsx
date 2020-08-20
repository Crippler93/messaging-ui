import React from 'react'
// Bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import Context from './context'
import DirectMessage from './components/DirectMessages'
import ChatRooms from './components/ChatRooms'
import LoadInitialData from './components/InitialData'
import Chat from './pages/Chat'
import BlockUI from './pages/BlockPage'

import './App.scss'

function App() {
  const [block, setBlock] = React.useState<boolean>(false)

  return (
    <Context.Provider value={{ block, setBlock }}>
      <Container fluid>
        <Row className={`fullH ${block ? 'filter' : ''}`}>
          <LoadInitialData>
            <Col md={3} className="sidebar">
              <ChatRooms />
              <DirectMessage />
            </Col>
            <Col md={9} className="main">
              <Chat />
            </Col>
          </LoadInitialData>
        </Row>
        <BlockUI show={block} />
      </Container>
    </Context.Provider>
  )
}

export default App
