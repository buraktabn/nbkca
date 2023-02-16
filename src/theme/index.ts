
let colors = {

  primary: '#4ADE7B',
  secondary: '#F9CB80',
  error: '#FCC5D8',
  
  // generic colors
  white: '#ffffff',
  black: '#000000',

  // background colors (light)
  background: "$white",
  backgroundAlpha: "rgba(255, 255, 255, 0.8)", // used for semi-transparent backgrounds like the navbar
  foreground: "$black",
  backgroundContrast: "$white",


  //semantic colors (light)
  blue50: '#EDF5FF',
  // ...
  blue900: '#00254D',
  // ...

  // brand colors
  primaryLight: '$blue200',
  primaryLightHover: '$blue300', // commonly used on hover state
  primaryLightActive: '$blue400', // commonly used on pressed state
  primaryLightContrast: '$blue600', // commonly used for text inside the component
  // primary: '$blue600',
  primaryBorder: '$blue500',
  primaryBorderHover: '$blue600',
  primarySolidHover: '$blue700',
  primarySolidContrast: '$white', // commonly used for text inside the component
  primaryShadow: '$blue500'

  // ... rest of colors (secondary, success, warning, error, etc)
}

let fonts = {
  sans: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;`,
  mono: `Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono'`
}

let fontSize = {
  xs: '0.75rem', /* 12px */
  sm: '0.875rem', /* 14px */
  base: '1rem', /* 16px */
  md: '1rem', /* 16px */
  lg: '1.125rem', /* 18px */
  xl: '1.25rem', /* 20px */
  '2xl': '1.5rem', /* 24px */
  '3xl': '1.875rem', /* 30px */
  '4xl': '2.25rem', /* 36px */
  '5xl': '3rem', /* 48px */
  '6xl': '3.75rem', /* 60px */
  '7xl': '4.5rem', /* 72px */
  '8xl': '6rem', /* 96px */
  '9xl': '8rem', /* 128px */
}

let fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900
}

let lineHeights = {
  xs: 1, /* 16px */
  sm: 1.25, /* 20px */
  base: 1.5, /* 24px */
  md: 1.5, /* 24px */
  lg: 1.75, /* 28px */
  xl: 1.75, /* 28px */
  '2xl': 2, /* 32px */
  '3xl': 2.25, /* 36px */
  '4xl': 2.5, /* 40px */
  '5xl': 1, /* 16px */
  '6xl': 1, /* 16px */
  '7xl': 1, /* 16px */
  '8xl': 1, /* 16px */
  '9xl': 1 /* 16px */
}

let letterSpacings = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em'
}

let radii = {
  xs: '7px',
  sm: '9px',
  md: '12px',
  base: '14px',
  lg: '14px', // preferred value by NextUI components
  xl: '18px',
  '2xl': '24px',
  '3xl': '32px',
  squared: '33%',
  rounded: '50%',
  pill: '9999px',
}

let borderWeights = {
  light: '1px',
  normal: '2px',
  bold: '3px',
  extrabold: '4px',
  black: '5px'
}

let spacing = {
  0: '0rem',
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.375rem',
  xl: '2.25rem',
  '2xl': '3rem',
  '3xl': '5rem',
  '4xl': '10rem',
  '5xl': '14rem',
  '6xl': '18rem',
  '7xl': '24rem',
  '8xl': '32rem',
  '9xl': '40rem',
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',
  screen: '100vw',
  full: '100%',
  px: '1px',
  1: '0.125rem',
  2: '0.25rem',
  3: '0.375rem',
  4: '0.5rem',
  5: '0.625rem',
  6: '0.75rem',
  7: '0.875rem',
  8: '1rem',
  9: '1.25rem',
  10: '1.5rem',
  11: '1.75rem',
  12: '2rem',
  13: '2.25rem',
  14: '2.5rem',
  15: '2.75rem',
  16: '3rem',
  17: '3.5rem',
  18: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem'
}


export default { 
  colors, 
  fonts, 
  fontSize, fontWeights, lineHeights, letterSpacings, 
  radii, borderWeights, spacing 
};
