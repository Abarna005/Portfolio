import { useEffect } from "react";

export const ThemeToggle = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return null; // no button since theme change option not needed
};

