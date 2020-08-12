import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';
import Header from './ui/Header';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/training' component={() => <>training</>} />
          <Route exact path='/about' component={() => <>about</>} />
          <Route exact path='/contact' component={() => <>contact</>} />
          <Route exact path='/' component={() => <>Home</>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
