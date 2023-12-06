import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar/Navbar';
import Body from './body/Body';
import Section from './body/Section';
import Section2 from './body/Section2';
import Footer from './body/Footer';
import SignIn from './body/SignIn';
import GetStarted from './body/GetStarted';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from './body/WelcomePage';
import CreateStoryPage from './body/CreateStoryPage';
import Stories from './body/Stories';
import ViewPost from './body/ViewPost';
import Contact from './body/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<> <Navbar/> <Footer/></>}>
      <Route path='/' element={<Body/>} />
    
      <Route path='/WelcomePage' element={<WelcomePage/>} /> 
      <Route path='/CreateStoryPage' element={<CreateStoryPage/>} />
      <Route path='/Stories' element={<Stories/>} />
      <Route path='/ViewPost' element={<ViewPost/>} />
      <Route path='/Contact' element={<Contact/>} />
      
      </Route>
      <Route path='/SignIn' element={<SignIn/>} />
      <Route path='/GetStarted' element={<GetStarted/>} /> 
      

           
      {/* <Route path='/' element={<Body/>} />
      <Route path='/Section' element={<Section/>} />
      <Route path='/Section2' element={<Section2/>} />
      <Route path='/Footer' element={<Footer/>} />
     */}

      </Routes>
    </BrowserRouter>
    

   
    </>
  )
}

export default App




{/* <BrowserRouter> */}
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/newtask" element={<Newtask />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/alltask" element={<Alltask />} />
      </Routes>
    </BrowserRouter> */}

 