import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Whatsapp from './components/Whatsapp'
import Quote from './pages/Quote';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import HelpCenter from './pages/HelpCenter';

const router = createBrowserRouter([
   {
    path:'/',
    element:<Home/>
   },
   {
    path:'/contact',
    element:<Contact/>
   },
   {
    path:'/privacy',
    element:<PrivacyPolicy/>
   },
   {
    path:'/help',
    element:<HelpCenter/>
   },
  ]);

const App = () => {
  const [isLoading, setIsLoading]=useState(true)

  
  return (
    <>
     <Header/>
      <RouterProvider router={router}/> 
      {/* <Whatsapp/>  */}
     <Footer/>
    </>
  )
};

export default App;