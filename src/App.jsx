import { useState } from "react";
import Header from "./components/Header";
import ListBox from "./components/ListBox";
import Message from "./components/Message";
import { languages } from "./data/laguage";
import Word from "./components/Word";
import Input from "./components/Input";

function App() {
  const [langList, setLangList] = useState(languages);
  const [currentWord, setCurrentWord] = useState("react");

  return (
    <>
      <div className="wrapper">
        <Header />
        <Message />
        <ListBox languages={langList} />
        <Word currentWord={currentWord} />
        <Input />
      </div>
    </>
  );
}

export default App;
