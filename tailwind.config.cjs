module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#0D1117",
        secondary: "#1F2937",
        accent: "#F97316",
        surface: "#111827",
        border: "#374151",
        success: "#10B981",
        danger: "#EF4444",
        warning: "#F59E0B",
        textPrimary: "#F3F4F6",
        textSecondary: "#9CA3AF",
      },
      borderRadius: {
        panel: "2px",
        button: "4px",
      },
      boxShadow: {
        panel: "0 0 0 1px rgba(255,255,255,0.05)",
        hover: "0 0 0 1px rgba(249,115,22,0.4)",
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
      },
    },
  },
  plugins: [],
};
