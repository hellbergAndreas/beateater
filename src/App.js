import React from "react"

import InstrumentBoard from "./components/instrument-board/instrument-board"
import PresetMenu from "./components/preset/preset.component"

import "./App.css"

function App() {
  return (
    <div className="app">
      <InstrumentBoard></InstrumentBoard>
      <PresetMenu></PresetMenu>
    </div>
  )
}

export default App
