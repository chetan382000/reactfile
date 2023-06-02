import React from "react";
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Layout from "./components/Layout";
const App=()=>{
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Layout}>
        <Route path="/" Component={Home} />
        <Route path="/contact" Component={Contact} />
        <Route path="/about" Component={About} />
        <Route path="*" Component={Error} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;