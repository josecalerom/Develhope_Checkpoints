import React from 'react'

export const Card = ({user}) => {
  return (
    <>
    <div>
        <h3>{user.first_name}</h3>
        <h3>{user.last_name}</h3>
        <h3>{user.email}</h3>
    </div>
    </>
  )
}
