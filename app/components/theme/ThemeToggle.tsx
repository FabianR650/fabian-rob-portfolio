import { useDarkMode } from "../hooks/useDarkMode";

export default function ThemeToggle() {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="px-3 py-2 rounded-md border text-sm transition-colors
                 hover:bg-neutral-200 dark:hover:bg-neutral-700"
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
