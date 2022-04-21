import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.global.css';
import ContentWrapper from './components/ContentWrapper';

const Home: React.FC = () => {
  return (
    <div className="items-center justify-center w-full h-screen overflow-hidden overscroll-none">
      <ContentWrapper />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
