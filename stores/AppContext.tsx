'use client'

import React, { createContext, useState, useEffect, useContext } from 'react'

type AppProviderProps = {
  isPreview: boolean
}

type AppState = AppProviderProps

type AppValue = {
  state: AppState
  setState: React.Dispatch<React.SetStateAction<AppState>>
  updateState: (next: Partial<AppState>) => void
}

const initialState: AppState = { isPreview: false }

const initValue: AppValue = {
  state: initialState,
  setState: () => {},
  updateState: () => {},
}

// Create the context
const AppContext = createContext(initValue)

// Create a provider component
export const AppProvider = ({ isPreview, children }: React.PropsWithChildren<AppProviderProps>) => {
  const [state, setState] = useState(initialState)

  const updateState = (next: Partial<AppState>) => setState(prev => ({ ...prev, ...next }))

  // Define any functions or values you want to provide
  const value: AppValue = {
    state,
    setState,
    updateState,
  }

  useEffect(() => {
    updateState({ isPreview })
  }, [isPreview])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

// Export the context
export const useAppContext = () => useContext(AppContext)
