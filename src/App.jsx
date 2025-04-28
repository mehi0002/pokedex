import { Outlet } from "react-router-dom";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";


function App() {
  return(
    <>
      <ScrollToHashElement />
      <Outlet></Outlet>
    </>
  )
}

export default App

