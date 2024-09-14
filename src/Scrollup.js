import React, { useEffect, useState } from "react";
import Fade from 'react-reveal/Fade'; // For the fading effect

export default function ScrollUp() {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <Fade>
          <div className="reveal-button">
            <a
              href="#"
              className="scrollup"
              id="scroll-up"
              onClick={scrollToTop}
            >
              <i className="ri-arrow-up-line"></i> 
            </a>
          </div>
        </Fade>
      )}
    </div>
  );
}
