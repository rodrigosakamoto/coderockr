import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import Header from './components/Header';
import Modal from './components/Modal';

import { ModalProvider } from './hooks/modal';

import GlobalStyles from './styles/global';

function App() {
  return (
    <ModalProvider>
      <GlobalStyles />
      <Router>
        <Header />
        <Routes />
      </Router>
    </ModalProvider>
  );
}

export default App;
