import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Whatsapp from './components/Whatsapp'
import Quote from './pages/Quote';
import Contact from './pages/Contact';

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
    path:'/quote',
    element:<Quote/>
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