import { useCallback, useState } from 'react';
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
            <input
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
