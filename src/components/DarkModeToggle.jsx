import { useEffect, useState } from "react";

function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="
        fixed z-50
        bottom-3 left-3 sm:bottom-6 sm:left-6
        bg-slate-900 text-white
        px-3 py-2 sm:px-4 sm:py-2
        rounded-full
        text-xs sm:text-sm
        shadow-lg
        transition-all duration-300
        hover:scale-105 active:scale-95
      "
    >
      <span className="sm:hidden">
        {dark ? "☀️ Light" : "🌙 Dark"}
      </span>

      <span className="hidden sm:inline">
        {dark ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </span>
    </button>
  );
}

export default DarkModeToggle;