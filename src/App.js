import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./views/app/Home/Home"

const App = () => {
  return (
    <>
      <Header/>
      <Home/>
    </>
  );
}

export default App;
