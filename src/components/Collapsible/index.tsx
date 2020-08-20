import * as React from 'react'
import Accordion from 'react-bootstrap/esm/Accordion'
import Card from 'react-bootstrap/esm/Card'

import triangle from '../../assets/menu-icon.svg'
import { compProps } from './types'

import './styles.scss'

const Component = ({ activeKey, children, title }: compProps) => {
  const [expanded, setExpanded] = React.useState<Boolean>(true)

  const handleSelect = (event: any) => {
    event === null ? setExpanded(false) : setExpanded(true)
  }

  return (
    <Accordion defaultActiveKey={activeKey} onSelect={handleSelect}>
      <Card className="Collapsible">
        <Accordion.Toggle
          as={Card.Header}
          eventKey={activeKey}
          className="header"
        >
          <img
            src={triangle}
            alt="menu-logo"
            className={`menuIcon ${expanded && 'expanded'} mr`}
          />
          {title}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={activeKey}>
          <Card.Body className="body ml">{children}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

export default Component
