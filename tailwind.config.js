module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
      body: 'Poppins'
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      content: {
        about: 'url("/src/assets/img/outline-text/about.svg")',
        portfolio: 'url("/src/assets/img/outline-text/portfolio.svg")',
        services: 'url("/src/assets/img/outline-text/services.svg")',
        testimonials: 'url("/src/assets/img/outline-text/testimonials.svg")',
        contact: 'url("/src/assets/img/outline-text/contact.svg")',
        experience: '"Experience"',
        skills: '"Skills"'
      },
      colors: {
        primary: '#101010',
        secondary: '#101010',
        tertiary: '#101010',
        backDivider: '#141414',
        accent: {
          DEFAULT: '#F69521',
          hover: '#e67e22'
        },
        paragraph: '#ffffff'
      }
    }
  },
  plugins: []
};