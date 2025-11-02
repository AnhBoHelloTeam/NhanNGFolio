import "./App.css";
import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import NotFound from "./Pages/NotFound";
import { useHashNavigation } from "./hooks/useHashNavigation";

// Lazy load CVPage for better performance
const CVPage = lazy(() => import("./Pages/Home/CVPage"));

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Hash navigation handler component
function HashNavigationHandler() {
  useHashNavigation();
  return null;
}

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <HashNavigationHandler />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/cv" 
            element={
              <Suspense fallback={
                <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
                    <p className="mt-4 text-gray-600">Loading CV...</p>
                  </div>
                </div>
              }>
                <CVPage />
              </Suspense>
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
