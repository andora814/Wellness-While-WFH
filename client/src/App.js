import react from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header.js';
import Home from './pages/Home.js';
import About from './pages/About.js';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
