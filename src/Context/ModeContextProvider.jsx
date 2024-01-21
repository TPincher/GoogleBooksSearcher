import { useState } from "react"
import { createContext } from "react"

export const modeContext = createContext(null)

const modeContextProvider = ({ children }) => {

  const [mode, setMode] = useState(false)

  const data = {mode, setMode}

  return (
    <modeContext.Provider value={data}>{children}</modeContext.Provider>
  )
}

export default modeContextProvider