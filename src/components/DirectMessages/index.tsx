import * as React from 'react'
import { useQuery } from 'react-query'
// Bootstrap
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

import { fetchAllUsers } from '../../queries/user'
import State from '../State'

import triangle from '../../assets/menu-icon.svg'
import './styles.scss'

const Component = () => {
  const { isLoading, error, data: users } = useQuery<any[], string>(
    'users',
    fetchAllUsers
  )
  const [expanded, setExpanded] = React.useState<Boolean>(true)

  const handleSelect = (event: any) => {
    event === null ? setExpanded(false) : setExpanded(true)
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Something wrong happen try again</div>
  }

  return (
    <Accordion defaultActiveKey="0" onSelect={handleSelect}>
      <Card className="background">
        <Accordion.Toggle as={Card.Header} eventKey="0" className="header">
          <img
            src={triangle}
            alt="menu-logo"
            className={`menuIcon ${expanded && 'expanded'} mr`}
          />
          Direct Messages
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="body ml">
            {users?.map((user) => (
              <div key={user._id}>
                <State id={user.state_id} className="mr" />
                {`${user.first_name} ${user.last_name}`}
              </div>
            ))}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

export default Component
