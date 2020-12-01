import { Link } from 'react-router-dom';
import { useModal } from '../../hooks/modal';

import Modal from '../Modal';

import { Container, Wrapper } from './styles';

function Header() {
  const { handleModal } = useModal();

  return (
    <Container>
      <Wrapper>
        <Link to="/">Rockr Blog</Link>
        <ul>
          <li>
            <Link to="/">Posts</Link>
          </li>

          <li>
            <button type="button" onClick={handleModal}>
              Contact
            </button>
          </li>
        </ul>
      </Wrapper>
      <Modal />
    </Container>
  );
}

export default Header;
