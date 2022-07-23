import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./views/app/Home/Home"
import {mainRoutes} from "./routes/routes"
import React from "react"

const App = () => {

  const routes = mainRoutes.map(route=>{
    return(
      <Route
        key={route.tag}
        exact path={route.path}
        element={route.component}
      />
    )
  })
  console.log(routes[0])

  return (
    <>
      <Header/>
        <Routes>
            {routes}
        </Routes>
    </>
  );
}

export default App;
