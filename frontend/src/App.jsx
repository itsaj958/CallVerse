import React from 'react';

import {Route, Routes } from "react-router";

import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotificationsPage from "./pages/NotificationsPage.jsx";
import CallPage from "./pages/callPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import OnboardingPage from "./pages/OnboardingPage.jsx";


import toast, { Toaster } from 'react-hot-toast';

const App = () => {
 
  return (     // h-screen for full height, it will make the div take the full height of the viewport.
       // with data-theme : we can change the theme of the app which we had taken from daisyui.

    <div className="app bg-red-500 h-screen text-white" >
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
          path="/signup"
          element={
            <SignUpPage/>
          }
        />
      <Route path="/OnboardingPage" element={< OnboardingPage/>} />
     
      
      </Routes>  
      <Toaster />
      <button onClick={()=> toast.success('Successfully toasted!')}> lets make a toast</button>
        
    </div>
  )
}

export default App
