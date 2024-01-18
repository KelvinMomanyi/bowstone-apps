import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Whatsapp from './components/Whatsapp'

const router = createBrowserRouter([
   {
    path:'/',
    element:<Home/>
   },
  ]);

const App = () => {
  const [isLoading, setIsLoading]=useState(true)

  
  return (
    <>
     <Header/>
      <RouterProvider router={router}/> 
      <Whatsapp/> 
     <Footer/>
    </>
  )
};

export default App;