import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';
import Header from './ui/Header';
import Footer from './ui/Footer';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            path='/training/devops'
            component={() => <>DevOps Training</>}
          />
          <Route
            path='/training/frontend_development'
            component={() => <>Frontend development</>}
          />
          <Route
            path='/training/backend_development'
            component={() => <>Backend development</>}
          />
          <Route exact path='/training' component={() => <>Training</>} />
          <Route exact path='/about' component={() => <>About</>} />
          <Route exact path='/contact' component={() => <>Contact</>} />
          <Route exact path='/' component={() => <>Home</>} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
