import { useState } from "react"
import Header from "./components/Header"
import ListBox from "./components/ListBox"
import Message from "./components/Message"
import { languages } from "./data/laguage"

function App() {
  const [ langList , setLangList ] = useState(languages)


  return (
    <>
      <Header />
      <Message />
      <ListBox languages={langList}/>
    </>
  )
}

export default App
