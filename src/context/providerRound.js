import React, { useState, createContext } from 'react'

export const RoundContext = createContext()

export const RoundProvider = ({children}) => {
	const [value, setValue] = useState(1)
	return (
		<RoundContext.Provider value={{setValue,value}}>
			{children}
		</RoundContext.Provider>
	)
}

