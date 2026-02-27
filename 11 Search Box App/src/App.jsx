import React from 'react'
import SearchBox from './components/SearchBox'

const App = () => {

  const dataItems = [
  { id: 1, name: "Computer" },
  { id: 2, name: "Laptop" },
  { id: 3, name: "Coding" },
  { id: 4, name: "Mobile" },
  { id: 5, name: "Internet" },
  { id: 6, name: "Keyboard" },
  { id: 7, name: "Mouse" },
  { id: 8, name: "Monitor" },
  { id: 9, name: "Printer" },
  { id: 10, name: "Scanner" },
  { id: 11, name: "Tablet" },
  { id: 12, name: "Smartwatch" },
  { id: 13, name: "Speaker" },
  { id: 14, name: "Headphones" },
  { id: 15, name: "Camera" },
  { id: 16, name: "Microphone" },
  { id: 17, name: "Router" },
  { id: 18, name: "Hard Drive" },
  { id: 19, name: "USB Drive" },
  { id: 20, name: "Charger" }
];

  return (
    <div>

      <SearchBox dataItems={dataItems}/>
    </div>
  )
}

export default App