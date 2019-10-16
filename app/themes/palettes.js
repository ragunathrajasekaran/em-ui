const palettes = props => {
  // eslint-disable-next-line no-unused-vars
  const { primaryLight, primaryDark, secondaryLight, secondaryDark } = props;

  return {
    type: 'light',
    primary: {
      light: primaryLight,
      dark: primaryDark,
      main: primaryDark,
      background: {
        default: primaryLight,
        paper: primaryDark,
      },
    },
    secondary: {
      light: secondaryLight,
      dark: secondaryDark,
      main: secondaryDark,
      background: {
        default: primaryLight,
        paper: secondaryDark,
      },
    },
  };
};

export default palettes;
