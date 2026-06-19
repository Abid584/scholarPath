import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  // Initialize state from localStorage (or system preference if you wanted, but simple is better here)
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    // 1. Apply theme to HTML tag
    document.documentElement.setAttribute("data-theme", theme);
    // 2. Save to LocalStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <label className="swap swap-rotate btn btn-ghost btn-circle">
      {/* Hidden checkbox controls the state */}
      <input
        type="checkbox"
        onChange={handleThemeToggle}
        checked={theme === "dark"}
        // Add aria-label for accessibility
        aria-label="Toggle Dark Mode"
      />

      {/* Sun icon (Visible when Light) */}
      <Sun className="swap-off h-7 w-7 fill-current text-yellow-500" />

      {/* Moon icon (Visible when Dark) */}
      <Moon className="swap-on h-7 w-7 text-primary" />
    </label>
  );
};

export default ThemeToggle;
