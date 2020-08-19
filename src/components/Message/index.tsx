import * as React from 'react'

import { compProps } from './types'

import './styles.scss'

const formatDate = (date: string): string => {
  const outputDate = new Date(date)
  let month: number | string = outputDate.getMonth() + 1
  if (month < 10) {
    month = `0${month}`
  }
  return `${outputDate.getDate()}-${month}-${outputDate.getFullYear()}`
}

const Component = ({ text, user, date }: compProps) => (
  <div className="Message">
    <span className="user">{`${user.first_name} ${user.last_name}`}</span>
    <span className="text">{text}</span>
    <span className="date">{formatDate(date)}</span>
  </div>
)

export default Component
