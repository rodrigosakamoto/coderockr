import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  background: #2d2d2d;
  color: #fff;
  padding: 0 30px;

  position: sticky;
  position: -webkit-sticky;
  top: 0;

  z-index: 2;
`;

export const Wrapper = styled.nav`
  max-width: 1280px;
  margin: 0 auto;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  font-size: 36px;
  line-height: 43px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;

  @media (max-width: 1024px) {
    font-size: 24px;
  }

  @media (max-width: 600px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const MenuContainer = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  .new-post {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 56px;
    background: #f1a10a;
    border-radius: 70px;

    a {
      font-size: 22px;
    }

    @media (max-width: 1024px) {
      width: 120px;
    }

    @media (max-width: 600px) {
      width: 80px;

      a {
        font-size: 14px;
      }
    }
  }

  li {
    margin-right: 118px;

    &:nth-child(3) {
      margin-right: 0;
    }

    a {
      text-decoration: none;
      font-size: 32px;
      font-weight: 500;
      color: #fff;
    }

    button {
      border: none;
      background: none;
      outline: none;
      cursor: pointer;

      font-size: 32px;
      font-weight: 500;
      color: #fff;
    }
  }

  @media (max-width: 1024px) {
    li {
      margin-right: 32px;

      &:nth-child(3) {
        margin-right: 0;
      }

      a {
        font-size: 24px;
      }

      button {
        font-size: 24px;
      }
    }
  }

  @media (max-width: 600px) {
    li {
      margin-right: 8px;

      &:nth-child(3) {
        margin-right: 0;
      }

      a {
        font-size: 16px;
      }

      button {
        font-size: 16px;
      }
    }
  }
`;
