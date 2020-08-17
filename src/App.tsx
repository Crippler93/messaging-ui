import React from 'react'
// Bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import DirectMessage from './components/DirectMessages'
import InitialData from './components/InitialData'

function App() {
  return (
    <InitialData>
      <Container fluid>
        <Row style={{ minHeight: '100vh' }}>
          <Col md={3} style={{ backgroundColor: '#1F2326', color: '#fff' }}>
            <DirectMessage />
          </Col>
          <Col md={9}></Col>
        </Row>
      </Container>
    </InitialData>
  )
}

export default App
