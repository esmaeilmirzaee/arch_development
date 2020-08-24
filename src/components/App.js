import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';
import Header from './ui/Header';
import Footer from './ui/Footer';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0); // Make a selected menu active or visible
  const [value, setValue] = useState(0); // Active tab

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
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
            component={() => <>Backend_development </>}
          />
          <Route exact path='/training' component={() => <>Training</>} />
          <Route exact path='/about_me' component={() => <>About</>} />
          <Route exact path='/hire_me' component={() => <>Hire ME</>} />
          <Route exact path='/' component={() => <>Home</>} />
        </Switch>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
