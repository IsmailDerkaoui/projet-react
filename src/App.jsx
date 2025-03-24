import React from "react";
import "./App.css"
import "./style.scss"
import Navbar from "./components/nav/Navbar.jsx"
import Banner from "./components/Banner/Banner.jsx"
import Cards from "./components/Cards/Cards.jsx"
import Main from "./components/Main/Main.jsx"
import Footer from "./components/Footer/Footer.jsx"


function App() {
  return (
    <div>
      <Navbar/>
      <Main>
      <Banner />
      <Cards />
      </Main>
      <Footer/>
    </div>
  )
}
export default App;