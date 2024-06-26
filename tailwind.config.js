/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            gruvbox: {
                gray: {
                    100: '#a89984',
                    200: '#928374',
                    300: '#7c6f64',
                    400: '#665c54',
                    500: '#504945',
                    600: '#3c3836',
                    700: '#32302f',
                    800: '#282828',
                    900: '#1d2021',
                },
                wheat: {
                    100: '#fbf1c7',
                    200: '#ebdbb2',
                    300: '#d5c4a1',
                    400: '#bdae93',
                    500: '#a89984',
                },
                red: {
                    300: '#fb4934',
                    400: '#cc241d',
                    500: '#9d0006',
                },
                green: {
                    300: '#b8bb26',
                    400: '#98971a',
                    500: '#79740e',
                },
                yellow: {
                    300: '#fabd2f',
                    400: '#d79921',
                    500: '#b57614',
                },
                aqua: {
                    300: '#8ec07c',
                    400: '#689d6a',
                    500: '#427b58',
                },
                blue: {
                    300: '#83a598',
                    400: '#458588',
                    500: '#076678',
                },
                purple: {
                    300: '#d3869b',
                    400: '#b16286',
                },
                orange: {
                    300: '#fe8019',
                    400: '#d65d0e',
                }

            }
        }
    },
  },
  plugins: [],
}

