import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../../hooks/modal';

import Modal from '../Modal';

import { Container, Wrapper, Logo, MenuContainer } from './styles';

function Header() {
  const { handleModal } = useModal();

  return (
    <Container>
      <Wrapper>
        <Logo to="/">Rockr Blog</Logo>
        <MenuContainer>
          <li>
            <Link to="/">Posts</Link>
          </li>

          <li>
            <button type="button" onClick={handleModal}>
              Contact
            </button>
          </li>

          <li className="new-post">
            <Link to="/newPost">New Post</Link>
          </li>
        </MenuContainer>
      </Wrapper>
      <Modal />
    </Container>
  );
}

export default Header;
