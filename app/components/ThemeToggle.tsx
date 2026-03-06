"use client";

import { useTheme } from "./ThemeProvider";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40px",
        height: "40px",
        borderRadius: "10px",
        border: "1.5px solid var(--border)",
        background: "var(--bg-card)",
        color: "var(--text)",
        cursor: "pointer",
        transition: "all 180ms ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--tag-bg)";
        e.currentTarget.style.borderColor = "var(--primary-light)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "var(--bg-card)";
        e.currentTarget.style.borderColor = "var(--border)";
      }}
    >
      {theme === "dark" ? (
        <SunIcon style={{ width: "20px", height: "20px" }} />
      ) : (
        <MoonIcon style={{ width: "20px", height: "20px" }} />
      )}
    </button>
  );
}
