import { createMuiTheme } from '@material-ui/core/styles';

const darkBlue = "#9381FF"
const lightBlue = "#B8B8FF"
const silver = "#F8F7FF"
const lightCream = "#FFEEDD"
const darkCream = "#FFD8BE"

export default createMuiTheme({
  palette: {
    common: {
      darkBlue = `${darkBlue}`,
      lightBlue = `${lightBlue}`,
      silver = `${silver}`,
      lightCream = `${lightCream}`,
      darkCream = `${darkCream}`,
    },
    primary: {
      main: `${darkBlue}`
    },
    secondary: {
      main: `${lightCream}`
    }
  }
});
