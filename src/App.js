import React, { Fragment } from 'react'
import Nav from "./Nav";
import './styles/app.css'
import "./styles/colors.css"
import "./styles/error.css"


import Main from './Main';
import { BrowserRouter } from "react-router-dom";
import Footer from './components/Footer';



const App = () => {


  
  return (


   <div className="main-div" >


<BrowserRouter>
<Nav/>

      <Main />

    </BrowserRouter>
    <Footer/>
   
  

  
</div>
  )

}

export default App
