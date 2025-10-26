import React from 'react';

import { Navigate, Route, Routes } from "react-router";

import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotificationsPage from "./pages/NotificationsPage.jsx";
import CallPage from "./pages/CallPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import OnboardingPage from "./pages/OnboardingPage.jsx";


import toast, { Toaster } from 'react-hot-toast';

import PageLoader from "./components/PageLoader.jsx"; // to show loading state while checking auth status
import useAuthUser from "./hooks/useAuthUser.js";
import Layout from "./components/Layout.jsx";

import { useThemeStore } from "./store/useThemeStore.js";



const App = () => {
   const { isLoading, authUser } = useAuthUser(); // custom hook to get auth user data and loading state

  const isAuthenticated = Boolean(authUser); 
  const isOnboarded = authUser?.isOnboarded;

  const { theme } = useThemeStore();

  if (isLoading) return <PageLoader />; // if isLoading is true, means data is still being fetched, show loading spinner
 
  return (     // h-screen for full height, it will make the div take the full height of the viewport.
       // with data-theme : we can change the theme of the app which we had taken from daisyui.


    <div className="app h-screen" data-theme={theme} >

     <Routes>

        <Route path="/" element={ isAuthenticated && isOnboarded ? (

              <Layout showSidebar={true}>
                <HomePage />   
              </Layout>
            ) : (
              <Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />
            )
          }
        />
      <Route path="/" element={<HomePage />} />
      
      <Route
          path="/signup"
          element={
            !isAuthenticated ? <SignUpPage /> : <Navigate to={isOnboarded ? "/" : "/onboarding"} />
          }
        />
        <Route
          path="/login"
          element={
            !isAuthenticated ? <LoginPage /> : <Navigate to={isOnboarded ? "/" : "/onboarding"} />
          }
        />
        <Route
          path="/onboarding"
          element={
            isAuthenticated ? (!isOnboarded ? (<OnboardingPage /> ) : ( <Navigate to="/" />)) : ( <Navigate to="/login" />)
          }
        />

      </Routes>  
      <Toaster />
        
    </div>
  )
}

export default App
