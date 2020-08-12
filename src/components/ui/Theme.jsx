import { createMuiTheme } from '@material-ui/core/styles';

const darkBlue = '#9381FF';
const lightBlue = '#B8B8FF';
const silver = '#F8F7FF';
const lightCream = '#FFEEDD'; //FEF9F6
const darkCream = '#FFD8BE';

export default createMuiTheme({
  palette: {
    common: {
      darkBlue: `${darkBlue}`,
      lightBlue: `${lightBlue}`,
      silver: `${silver}`,
      lightCream: `${lightCream}`,
      darkCream: `${darkCream}`,
    },
    primary: {
      main: `${darkBlue}`,
    },
    secondary: {
      main: `${lightCream}`,
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: '"Playfair Display", "Roboto"',
    fontWeightLight: 200,
    fontWeightRegular: 300,
    fontWeightMedium: 400,
    fontWeightBold: 600,
  },
});
