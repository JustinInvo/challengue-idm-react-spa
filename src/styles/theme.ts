// src/styles/theme.ts

export const theme = {
  colors: {
    primary: '#EC0000',       // rojo Santander
    primaryDark: '#b30000',   // rojo oscuro para hover / estados
    secondary: '#DEEDF2',     // azul-cielo claro de soporte (fondo, acentos suaves)
    secondaryOrange: '#fea700',
    background: '#FFFFFF',    // blanco como fondo principal
    surface: '#f7f9fa',       // gris muy claro / neutro para superficies / cards
    text: '#212121',          // texto oscuro (negro grisáceo)
    textLight: '#555555',     // texto secundario / descripciones
    white: '#FFFFFF',
    error: '#d9534f',         // puedes conservar un rojo para errores
  },
  fonts: {
    main: '"Ubuntu", sans-serif', // fuente más moderna como mencionaste
    heading: '"Ubuntu", sans-serif',
  },
  spacings: {
    s: '0.5rem',
    m: '.75rem',
    l: '1.5rem',
    xl: '2rem',
  },
  borderRadius: '4px',
};

export type Theme = typeof theme;
