import React, { useState, createContext } from 'react'

export const RoundContext = createContext()

export const RoundProvider = ({children}) => {
  const [value, setValue] = useState('');
  return (
    <RoundContext.Provider value={{setValue,value}}>
      {children}
    </RoundContext.Provider>
  )
}

