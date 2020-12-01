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

  > a {
    font-size: 36px;
    line-height: 43px;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;

    li {
      &:nth-child(1) {
        margin-right: 118px;
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
  }

  @media (max-width: 900px) {
    > a {
      font-size: 32px;
    }
    ul {
      li {
        &:nth-child(1) {
          margin-right: 30px;
        }

        a {
          font-size: 24px;
        }

        button {
          font-size: 24px;
        }
      }
    }
  }
`;
