import { Outlet} from "react-router-dom";

function App() {
  return(
    <>
    <div id="siteContainer">
      <header> 
          <h1>Pokedex</h1> 
      </header>

        <Outlet></Outlet>
    </div>
    </>
  )
}

export default App

