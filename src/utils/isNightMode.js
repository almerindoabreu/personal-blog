const isNightMode = () => {
  const theme = typeof window !== "undefined" && window.__theme

  if (theme === "light") return false;
  if (theme === "dark") return true;
}

export default isNightMode;