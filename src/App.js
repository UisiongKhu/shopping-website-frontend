import React, { useEffect } from "react";
import Home from './pages/Home'

const App = () => {
  useEffect(() => {
    document.title = "Shopping Cart"
  })
  return <Home/>
}

export default App;
