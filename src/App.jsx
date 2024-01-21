import "./App.scss"
import { React, useState } from "react"
import Header from "./containers/Header/Header"
import ModeProvider from "./Context/ModeContextProvider"
import Bookshelf from "./containers/Bookshelf/Bookshelf"


function App() {

  const [searchTerm, setSearchTerm] = useState("")
  const [searchType, setSearchType] = useState("")
  const [current, setCurrent] = useState(0)


  return (
    <>
      <ModeProvider>
          <Header setSearchTerm = {setSearchTerm} setSearchType={setSearchType} setCurrent = {setCurrent}/>
          <Bookshelf searchTerm = {searchTerm} searchType = {searchType} current = {current} setCurrent = {setCurrent}/>
      </ModeProvider>
    </>
  )
}

export default App
