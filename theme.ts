'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  colorSchemes:{
    dark: true
  },
  typography: {
    fontFamily: 'var(--font-inter)',
    h1: {
      fontWeight: 600,
      fontSize: '3rem',
      lineHeight: 1.5,
      fontFamily: 'Inter, sans-serif',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.25rem',
      lineHeight: 1.5,
      fontFamily: 'Inter, sans-serif',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.5,
      fontFamily: 'Inter, sans-serif',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.5,
      fontFamily: 'Inter, sans-serif',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.5,
      fontFamily: 'Inter, sans-serif',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.5,
      fontFamily: 'Inter, sans-serif',
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.5,
      fontFamily: 'Inter, sans-serif',
    },
    body2: {
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.6,
      fontFamily: 'Inter, sans-serif',
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.75,
      fontFamily: 'Inter, sans-serif',
      letterSpacing: 0
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.75,
      fontFamily: 'Inter, sans-serif',
      letterSpacing: 0
    },
    caption: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.6,
      fontFamily: 'Inter, sans-serif',
      letterSpacing: 0
    },
    overline: {
      fontWeight: 600,
      fontSize: '0.75rem',
      lineHeight: 2.46,
      fontFamily: 'Inter, sans-serif',
      letterSpacing: '1px',
      textTransform: 'uppercase'
    },
  },
  components: {
    MuiListItemButton: {
      defaultProps: {
        disableTouchRipple: true,
      },
    },
  },
  
});

export default theme;