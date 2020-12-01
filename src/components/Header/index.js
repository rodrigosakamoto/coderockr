import { Link } from 'react-router-dom';

import { Container, Wrapper } from './styles';

function Header() {
  return (
    <Container>
      <Wrapper>
        <Link to="/">Rockr Blog</Link>
        <ul>
          <li>
            <Link to="/">Posts</Link>
          </li>

          <li>
            <button type="button" onClick={() => {}}>
              Contact
            </button>
          </li>
        </ul>
      </Wrapper>
    </Container>
  );
}

export default Header;
