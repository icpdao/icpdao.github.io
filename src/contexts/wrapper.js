import React from 'react'
import ApplicationContextProvider from './application'

export function wrapRootElement({ element }) {
  return (
    <ApplicationContextProvider>
      {element}
    </ApplicationContextProvider>
  )
}
