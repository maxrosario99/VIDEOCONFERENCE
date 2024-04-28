"use client"
import React from 'react'

const Meeting = ({params}: {params: {id: string }}) => {
  const { user, isLoaded } useUser();
  return (
    <div>Meeting Room: #{params.id} </div>
  )
}

export default Meeting