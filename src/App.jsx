import { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import Why from "./components/Why"

function App() {
  return (
    <>
      <header className=" bg-accent_bg">
        <div className="custom_container">
          <Navigation />
          <Hero />
        </div>
        <main className="bg-white">
          <div className="custom_container">
            <Why />
          </div>
        </main>
      </header>
    </>
  )
}

export default App
