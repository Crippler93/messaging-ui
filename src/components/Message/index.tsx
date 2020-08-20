import * as React from 'react'

import { compProps } from './types'

import './styles.scss'

const formatTime = (date: string): string => {
  const outputDate = new Date(date)

  let hours: number | string = outputDate.getHours()
  let minutes: number | string = outputDate.getMinutes()
  let extra = hours > 12 ? 'pm' : 'am'
  if (hours < 10) {
    hours = `0${hours}`
  }
  if (minutes < 10) {
    minutes = `0${minutes}`
  }

  return `${hours}:${minutes} ${extra}`
}

const Component = ({ text, user, date }: compProps) => (
  <div className="Message">
    <span className="user">{`${user.first_name} ${user.last_name} ${formatTime(
      date
    )}`}</span>
    <span className="text">{text}</span>
  </div>
)

export default Component
