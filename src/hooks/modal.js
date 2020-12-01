import { createContext, useContext, useState } from 'react';

const ModalContext = createContext({});

const ModalProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const handleModal = () => setVisible(!visible);

  return (
    <ModalContext.Provider value={{ visible, handleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

function useModal() {
  const context = useContext(ModalContext);

  return context;
}

export { ModalProvider, useModal };
