// import styled from "styled-components"
// import ThemeProvider from "styled-components"
import Menu from "./components/Menu"
// import logo from './logo.svg'
import './globals.css'
import Navbar from "./components/Navbar"
// import { darkTheme } from "./utils/Theme"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Video from "./pages/Video"


const App = () => {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Menu />
          <div className="main">
            <Navbar />
            <div className="wrapper">
              <Routes>
                <Route path="/">
                  <Route index element={<Home/>}/>
                  <Route path="video">
                    <Route path=":id" element={<Video/>}/>
                  </Route>
                </Route>
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
