import { useModal } from '../../hooks/modal';

import Close from '../../assets/close.svg';
import Send from '../../assets/send.svg';

import { Container, Content, InputBlock } from './styles';

function Modal() {
  const { visible, handleModal } = useModal();

  return (
    <Container visible={visible}>
      <Content>
        <button type="button" onClick={handleModal}>
          <img src={Close} alt="close" />
        </button>
        <form>
          <h2>Contact</h2>
          <InputBlock>
            <label>Name</label>
            <input type="text" placeholder="Fill your full name" />
          </InputBlock>
          <InputBlock>
            <label>E-mail</label>
            <input type="email" placeholder="Fill a valid e-mail" />
          </InputBlock>
          <InputBlock>
            <label>Phone</label>
            <input placeholder="Fill your phone" />
          </InputBlock>
          <InputBlock>
            <label>Post</label>
            <textarea placeholder="Hello..." />
          </InputBlock>
          <button type="button">
            <img src={Send} alt="send" />
            Submit
          </button>
        </form>
      </Content>
    </Container>
  );
}

export default Modal;
