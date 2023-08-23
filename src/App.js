import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './Layout/RootLayout';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import OurWork from './components/OurWork';
import ContactUs from './components/ContactUs';
import Careers from './components/Careers';
import Error from './Layout/404';

const router = createBrowserRouter([
  { path:'/', 
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home />},
      { path:'about', element: <About />},
      { path:'services', element: <Services />},
      { path:'our-work', element: <OurWork />},
      { path:'contact-us', element: <ContactUs />},
      { path:'careers', element: <Careers />},
    ]},
])
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
