import { BrowserRouter as Router } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import Header from './components/Header';

import { ModalProvider } from './hooks/modal';

import GlobalStyles from './styles/global';

function App() {
  return (
    <ModalProvider>
      <GlobalStyles />
      <Router>
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} />
      </Router>
    </ModalProvider>
  );
}

export default App;
