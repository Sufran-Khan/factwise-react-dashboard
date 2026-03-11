import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./App.css"
import Reporting from "./pages/Reporting"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reporting" element={<Reporting />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App