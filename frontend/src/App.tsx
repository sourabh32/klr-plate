import Dashboard from "./pages/Dashboard"
import Header from "./pages/Header"
import Home from "./pages/Home"

import { BrowserRouter,Routes,Route } from "react-router-dom"
import HowTo from "./pages/HowTo"
const App = () => {
  return (

    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<Dashboard />} />
      <Route path="/howto" element={
        <HowTo />
      } />
      
    </Routes>
    </BrowserRouter>
   
  )
}

export default App