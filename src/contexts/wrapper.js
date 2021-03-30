import React from 'react'
import ApplicationContextProvider, { Updater as ApplicationContextUpdater } from './application'

export function wrapRootElement({ element }) {
  return (
    <ApplicationContextProvider>
        <ApplicationContextUpdater />
        {element}
    </ApplicationContextProvider>
  )
}
