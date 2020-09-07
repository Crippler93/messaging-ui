import React from 'react'
// Bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import Context from './context'
import DirectMessage from './components/DirectMessages'
import ChatRooms from './components/ChatRooms'
import Login from './components/RegisterForm'
import LoadInitialData from './components/InitialData'
import Modal from './components/Modal'
import Chat from './pages/Chat'
import BlockUI from './pages/BlockPage'

import menuIcon from './assets/menu-icon.svg'
import closeIcon from './assets/close-icon.svg'
import './App.scss'

function App() {
  const [blockUI, setBlock] = React.useState<boolean>(true)
  const [showModal, setShowModal] = React.useState<boolean>(true)
  const [showSideMenu, setShowSideMenu] = React.useState<boolean>(false)

  const handleSideMenuBtnClick = () => {
    setShowSideMenu(true)
  }

  const handleSideMenuCloseBtnClick = () => {
    setShowSideMenu(false)
  }

  return (
    <Context.Provider
      value={{ block: blockUI, setBlock, showModal, setShowModal }}
    >
      <main>
        <header id="main">
          <img
            src={menuIcon}
            alt="Menu icon"
            onClick={handleSideMenuBtnClick}
          />
          <h4>Messaging</h4>
        </header>
        <Container fluid>
          <Row className={`${blockUI ? 'filter' : ''}`}>
            <LoadInitialData>
              <Col className="chat">
                <Chat />
              </Col>
            </LoadInitialData>
          </Row>
          <BlockUI show={blockUI} />
          <Modal>
            <Login />
          </Modal>
        </Container>

        <section className={`sideMenu ${showSideMenu ? 'active' : ''}`}>
          <header id="sideMenu">
            <h4>Menu</h4>
            <img
              src={closeIcon}
              alt="Close side menu"
              onClick={handleSideMenuCloseBtnClick}
            />
          </header>
          <ChatRooms />
          <DirectMessage />
        </section>
      </main>
    </Context.Provider>
  )
}

export default App
