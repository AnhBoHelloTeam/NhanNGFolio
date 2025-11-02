import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

/**
 * Custom hook to handle hash navigation
 * When navigating to a hash link from another route, this will scroll to the section
 */
export const useHashNavigation = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL
    const hash = location.hash;
    
    if (hash) {
      // Remove the # symbol
      const sectionId = hash.substring(1);
      
      // Small delay to ensure the page is fully loaded
      setTimeout(() => {
        scroller.scrollTo(sectionId, {
          duration: 800,
          smooth: true,
          offset: -70, // Account for navbar height
        });
      }, 100);
    }
  }, [location]);
};

