import { Outlet} from "react-router-dom";

function App() {
  return(
    <>
    <header> 
        <h1>Pokedex</h1> 
    </header>

      <Outlet></Outlet>
    </>
  )
}

export default App

