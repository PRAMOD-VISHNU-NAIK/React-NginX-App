import React from 'react'
import { useParams } from 'react-router-dom'

export const UserDetails = () => {

    const param = useParams();

    const userId = param.userId;

  return (
    <div>UserDetails of User {userId}</div>
  )
}
