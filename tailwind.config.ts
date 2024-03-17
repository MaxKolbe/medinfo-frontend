import type { Config } from "tailwindcss";

const tailwindConfig = {
	content: ["./src/**/*.{ts,tsx,mdx}"],

	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "1000px",
			xl: "1280px",
		},

		extend: {
			colors: {
				medinfo: {
					primary: "var(--color-primary)",
					"primary-darker": "var(--color-primary-darker)",
					"primary-lighter": "var(--color-primary-lighter)",
					"primary-subtle": "var(--color-primary-subtle)",
					secondary: "var(--color-secondary)",
					"secondary-darker": "var(--color-seconday-darker)",
					"secondary-lighter": "var(--color-secondary-lighter)",
					"secondary-subtle": "var(--color-secondary-subtle)",
				},

				// Shadcn colors
				background: "hsl(0 0% 100%)",
				foreground: "hsl(222.2 47.4% 11.2%)",
				popover: "theme(colors.background)",
				// eslint-disable-next-line sonarjs/no-duplicate-string
				primary: "theme(colors.foreground)",
				"primary-foreground": "hsl(210 40% 98%)",
				"popover-foreground": "theme(colors.foreground)",
				accent: "hsl(210 40% 96.1%)",
				"accent-foreground": "theme(colors.foreground)",
				input: "hsl(214.3 31.8% 91.4%)",
				border: "hsl(214.3 31.8% 91.4%)",
				ring: "hsl(215 20.2% 65.1%)",
				muted: "hsl(210 40% 96.1%)",
				"muted-foreground": "hsl(215.4 16.3% 46.9%)",
			},

			fontFamily: {
				roboto: ["var(--font-roboto)"],
				"work-sans": ["var(--font-work-sans)"],
			},

			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},

			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},

	plugins: [],
} satisfies Config;

export default tailwindConfig;
