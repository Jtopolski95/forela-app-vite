/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: {
          50: '#F5F7FA',
          100: '#E4E7EB',
          200: '#CBD2D9',
          300: '#9AA5B1',
          400: '#7B8794',
          500: '#616E7C',
          600: '#52606D',
          700: '#3E4C59',
          800: '#323F4B',
          900: '#1F2933'
        },
        // Accent colors
        accent: {
          blue: '#1E88E5',
          lightBlue: '#E3F2FD',
          green: '#43A047',
          lightGreen: '#E8F5E9',
          orange: '#FB8C00',
          lightOrange: '#FFF3E0',
          red: '#E53935',
          lightRed: '#FFEBEE'
        },
        // Background colors
        background: {
          light: '#FFFFFF',
          dark: '#1F2933',
          gray: '#F5F7FA'
        },
        // Text colors
        text: {
          primary: '#1F2933',
          secondary: '#616E7C',
          light: '#9AA5B1',
          white: '#FFFFFF'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif']
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem'
      },
      boxShadow: {
        'soft': '0 2px 4px rgba(0, 0, 0, 0.05)',
        'medium': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'strong': '0 10px 15px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}; 