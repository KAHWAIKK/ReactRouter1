import { 
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

//pages

import Home from "./pages/Home"
import About from "./pages/About"
import Faq from  "./pages/help/Faq"
import Contact from './pages/help/Contact'

//layouts
import RouteLayout from './Layout/RouteLayout'
import HelpLayout from './Layout/HelpLayout'



const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<RouteLayout></RouteLayout>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="about" element={<About></About>}></Route>
          <Route path="help" element={<HelpLayout></HelpLayout>}>
            <Route path="faq" element={<Faq></Faq>} ></Route>
            <Route path="contact" element={<Contact></Contact>} ></Route>
          </Route>
      </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;


/* Normally when you click a link on anormal html a tag it sends a request to the server which then sends back the info requested, however react has the router compompontnt which intercepts this request and instead handles this within the brwoser, it does this using {Links} and (NavLink) component inside of the Routes component 

Link and NavLink have the capability to intercept request to the server and instead handle them within*/

/* The diff btwn Link and NavLink is that (NavLink) COMPONENT adds an attribute of class "active* that we can use that for styling */


/* Normally when you click a link on anormal html a tag it sends a request to the server which then sends back the info requested, however react has the router compompontnt which intercepts this request and instead handles this within the brwoser, it does this using {Links} and (NavLink) component inside of the Routes component 

Link and NavLink have the capability to intercept request to the server and instead handle them within*/

/* The diff btwn Link and NavLink is that (NavLink) COMPONENT adds an attribute of class "active* that we can use that for styling */