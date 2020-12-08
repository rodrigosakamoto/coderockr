import { useCallback, useState } from 'react';
import InputMask from 'react-input-mask';
import { toast } from 'react-toastify';
import { useModal } from '../../hooks/modal';

import Close from '../../assets/close.svg';
import Send from '../../assets/send.svg';

import InputBlock from '../InputBlock';

import { Container, Content } from './styles';

function Modal() {
  const { visible, handleModal } = useModal();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [post, setPost] = useState('');

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      if (name === '' || email === '' || phone === '' || post === '') {
        toast.error('Todos os campos são obrigatórios');
      } else {
        toast.success('Contato cadastrado com sucesso');
      }
    },
    [name, email, phone, post],
  );

  return (
    <Container visible={visible}>
      <Content>
        <button type="button" onClick={handleModal}>
          <img src={Close} alt="close" />
        </button>
        <form onSubmit={handleSubmit}>
          <h2>Contact</h2>
          <InputBlock>
            <label>Name</label>
            <input
              type="text"
              placeholder="Fill your full name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </InputBlock>
          <InputBlock>
            <label>E-mail</label>
            <input
              type="email"
              placeholder="Fill a valid e-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </InputBlock>
          <InputBlock>
            <label>Phone</label>
            <InputMask
              mask="(99) 99999-9999"
              type="text"
              placeholder="Fill your phone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </InputBlock>
          <InputBlock>
            <label>Post</label>
            <textarea
              placeholder="Hello..."
              value={post}
              onChange={e => setPost(e.target.value)}
            />
          </InputBlock>
          <button type="submit">
            <img src={Send} alt="send" />
            Submit
          </button>
        </form>
      </Content>
    </Container>
  );
}

export default Modal;
