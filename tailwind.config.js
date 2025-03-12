module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Calibri',
      secondary: 'Poppins',
      tertiary: 'Calibri',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      backgroundImage: {
        site: "url('./assets/bg.jpg')",
        site2: "url('./assets/Pattern.gif')",
        banner: "url('./assets/banner-bg.jpg')",
        about: "url('./assets/profile.png')",
        services: "url('./assets/services.png')",
        skill1: "url('./assets/skill1.png')",
        skill2: "url('./assets/skill2.png')",
        skill3: "url('./assets/skill3.png')",
        skill4: "url('./assets/skill4.png')",
        skill5: "url('./assets/skill5.png')",
        skill6: "url('./assets/skill6.png')",
        skill7: "url('./assets/skill7.png')",
      },
    },
  },
  plugins: [],
};
