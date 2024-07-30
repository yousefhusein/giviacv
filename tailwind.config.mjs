export default {
    content: ["./src/**/*.{js}", "./index.html", "./demo/**/*.html"],
    plugins: [require("@tailwindcss/typography")],
    theme: {
        fontFamily: {
            base: "var(--font-family)",
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1400px",
        },
        extend: {
            colors: {
                "base-100": "var(--base-100)",
                "base-200": "var(--base-200)",
                "base-300": "var(--base-300)",
                "base-foreground": "var(--base-foreground)",
                primary: "var(--primary)",
                accent: "var(--accent)",
                "accent-foreground": "var(--accent-foreground)",
                "primary-foreground": "var(--primary-foreground)",
                muted: "var(--muted)",
                "muted-foreground": "var(--muted-foreground)",
            },
        },
    },
}
