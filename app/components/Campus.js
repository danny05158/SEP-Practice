import React from 'react'

export default function Campus (props) {
  return (
    <div>
      <h1>{props.campuses.name}</h1>
      <h3>{props.campuses.imageUrl}</h3>
    </div>
  )
}
