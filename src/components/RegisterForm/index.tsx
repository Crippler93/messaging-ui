import * as React from 'react'
// Bootstrap
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import Context from '../../context'
import { stateProps, inputEvent, formEvent } from './types'
import reducer from './reducer'

import './styles.scss'

const initialState: stateProps = {
  user_name: '',
  password: '',
  new_password: '',
  error: {
    user_name: '',
    password: '',
    new_password: ''
  },
  isLoading: false
}

const Component = () => {
  const [validated, setValidated] = React.useState(false)
  const { setBlock, setShowModal } = React.useContext(Context)
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const { password, new_password, user_name } = state

  const handleFormSubmit = (event: formEvent) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  const handleInputChange = ({ target }: inputEvent) => {
    const { value, name: fieldName } = target
    dispatch({
      type: 'field',
      payload: {
        value,
        fieldName
      }
    })
  }

  const handleBackLogin = ({ target }: React.MouseEvent) => {
    setShowModal(false)
    setBlock(false)
  }

  return (
    <div className="Login">
      <header>Register</header>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Form.Group controlId="userName">
          <Form.Label>User name:</Form.Label>
          <Form.Control
            type="text"
            name="user_name"
            placeholder="Jessica"
            onChange={handleInputChange}
            required
            value={user_name}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid user name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={handleInputChange}
            required
            value={password}
          />
        </Form.Group>
        <Form.Group controlId="repeatPassword">
          <Form.Label>Repeat password:</Form.Label>
          <Form.Control
            type="password"
            name="new_password"
            onChange={handleInputChange}
            required
            value={new_password}
          />
        </Form.Group>
        <footer>
          <Button type="button" variant="link" onClick={handleBackLogin}>
            Back to Login
          </Button>
          <Button type="submit" variant="primary">
            Sign in
          </Button>
        </footer>
      </Form>
    </div>
  )
}

export default Component
