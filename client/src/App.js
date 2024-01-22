// import styled from "styled-components"
// import ThemeProvider from "styled-components"
import Menu from "./components/Menu"
// import logo from './logo.svg'
import './globals.css'
import Navbar from "./components/Navbar"
// import { darkTheme } from "./utils/Theme"


const App = () => {
  return (
    <>
      <div className="container">
        <Menu />
        <div className="main">
          <Navbar />
          <div className="wrapper">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
