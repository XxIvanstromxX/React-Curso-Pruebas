import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button 
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="text-xl hover:scale-110 transition-transform hover:bg-gray-200 dark:hover:bg-gray-700 px-1 rounded-md"
    >
      {theme === "light" ? (
        <img src="/sun.svg" alt="sun" className="h-6 w-6"/>
      ) : 
      (
        <img src="/moon.svg" alt="moon" className="h-6 w-6 dark:invert"/>
      )}
    </button>
  );
}