import React, { createContext, useContext, useReducer, useMemo, useCallback } from 'react'

const ACTIONS = {
  UPDATE_DARKMODE: 'UPDATE_DARKMODE'
}

const DARKMODE_KEY = 'DARKMODE_KEY'

const DARK_MODE_OPTION = {
  DARK: 'DARK',
  LIGHT: 'LIGHT'
}

const INITIAL_STATE = {
  [DARKMODE_KEY]: DARK_MODE_OPTION.DARK
}

const ApplicationContext = createContext({})

function useApplicationContext() {
  return useContext(ApplicationContext)
}

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.UPDATE_DARKMODE: {
      const { mode } = payload
      return {
        ...state,
        [DARKMODE_KEY]: mode
      }
    }

    default: {
      throw Error(`Unexpected action type in DataContext reducer: '${type}'.`)
    }
  }
}

export default function ApplicationContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  const updateDarkMode = useCallback((mode) => {
    dispatch({
      type: ACTIONS.UPDATE_DARKMODE,
      payload: {
        mode
      }
    })
  }, [])

  return (
    <ApplicationContext.Provider value={useMemo(() => [state, { updateDarkMode }], [state, updateDarkMode])}>
      {children}
    </ApplicationContext.Provider>
  )
}

export function useDarkMode() {
  const [state, { updateDarkMode }] = useApplicationContext()

  const darkModeOn = state?.[DARKMODE_KEY] === DARK_MODE_OPTION.DARK

  function toggleDarkMode() {
    if (darkModeOn) {
      updateDarkMode(DARK_MODE_OPTION.LIGHT)
    } else {
      updateDarkMode(DARK_MODE_OPTION.DARK)
    }
  }

  return [darkModeOn, toggleDarkMode]
}
