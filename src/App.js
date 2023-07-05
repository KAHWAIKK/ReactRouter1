import { BrowserRouter,Routes,Route,Link,NavLink } from 'react-router-dom'

//pages

import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Job Routing</h1>
          {/* <Link to="/">Home</Link> */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
      <main >
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;


/* Normally when you click a link on anormal html a tag it sends a request to the server which then sends back the info requested, however react has the router compompontnt which intercepts this request and instead handles this within the brwoser, it does this using {Links} and (NavLink) component inside of the Routes component 

Link and NavLink have the capability to intercept request to the server and instead handle them within*/

/* The diff btwn Link and NavLink is that (NavLink) COMPONENT adds an attribute of class "active* that we can use that for styling */