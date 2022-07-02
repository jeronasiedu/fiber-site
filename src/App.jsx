import { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import Why from "./components/Why"
import SocialProof from "./components/SocialProof"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <header className=" bg-accent_bg">
        <div className="custom_container">
          <Navigation />
          <Hero />
        </div>
      </header>
      <main className="bg-white">
        <div className="custom_container">
          <Why />
          <SocialProof />
        </div>
      </main>
      <footer className="bg-accent_bg">
        <div className="custom_container">
          <Footer />
        </div>
      </footer>
    </>
  )
}

export default App
