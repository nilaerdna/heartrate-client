const colors = require('tailwindcss/colors');

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        colors: {
            // Build your palette here
            transparent: 'transparent',
            current: 'currentColor',
            gray: colors.trueGray,
            red: colors.red,
            green: colors.green,
            blue: colors.lightBlue,
            yellow: colors.amber,
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
