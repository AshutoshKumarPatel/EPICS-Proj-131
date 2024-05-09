import { useState, useEffect, useCallback } from "react";

const CheckWindowSize = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  }, []);

  useEffect(() => {
    const checkWindowSize = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
      setMenuOpen(desktop);
    };

    checkWindowSize();

    window.addEventListener("resize", checkWindowSize);

    return () => window.removeEventListener("resize", checkWindowSize);
  }, []);
  return { isDesktop, isMenuOpen, toggleMenu };
};

export default CheckWindowSize;