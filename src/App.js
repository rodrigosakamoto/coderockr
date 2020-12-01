import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import Header from './components/Header';

import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Routes />
      </Router>
    </>
  );
}

export default App;
