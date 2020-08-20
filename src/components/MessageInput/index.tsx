import * as React from 'react'

import sendLogo from '../../assets/paper-plane.svg'
import { CompProps } from './types'

import './styles.scss'

const Component = ({ text, onChange, onSend, ...props }: CompProps) => {
  const handleKeyPress = (event: React.KeyboardEvent<any>) => {
    if (event.key === 'Enter') {
      onSend()
    }
  }

  return (
    <div className="messageInput" {...props}>
      <input
        type="text"
        value={text}
        onChange={onChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={onSend}>
        <img src={sendLogo} alt="Send message" />
      </button>
    </div>
  )
}

export default Component
