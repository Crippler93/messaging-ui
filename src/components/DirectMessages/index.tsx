import * as React from 'react'
import { useQuery } from 'react-query'
// Bootstrap
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

import './styles.scss'
import { fetchAllUsers } from '../../queries/user'

const Component = () => {
  const { isLoading, error, data } = useQuery<any[], string>(
    'users',
    fetchAllUsers
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Something wrong happen try again</div>
  }

  return (
    <Accordion defaultActiveKey="0" style={{ height: '100%' }}>
      <Card style={{ height: '100%' }}>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          Direct Messages
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            {data?.map((user) => (
              <div>{`${user.first_name} ${user.last_name} ${user.state_id}`}</div>
            ))}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

export default Component
