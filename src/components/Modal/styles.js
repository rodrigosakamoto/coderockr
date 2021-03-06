import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  background: rgba(0, 0, 0, 0.6);

  display: flex;
  justify-content: center;
  align-items: center;

  display: ${props => (props.visible ? 'flex' : 'none')};
`;

export const Content = styled.div`
  background: #fff;
  max-width: 810px;
  width: 100%;
  padding: 30px 0;

  margin: 0 18px;

  position: relative;

  > button {
    position: absolute;
    top: 2%;
    right: 2%;

    background: none;
    border: none;
    cursor: pointer;

    img {
      width: 28px;
      height: 28px;
    }
  }

  form {
    width: 100%;
    max-width: 565px;
    margin: 0 auto;
    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 36px;
      font-weight: bold;
      color: #f1a10a;
      margin-bottom: 49px;

      @media (max-width: 900px) {
        margin-bottom: 16px;
      }
    }

    button {
      cursor: pointer;
      width: 230px;
      height: 48px;
      background: #2d2d2d;
      border-radius: 4px;
      margin-top: 89px;

      @media (max-width: 900px) {
        margin-top: 16px;
      }

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 24px;
      font-weight: 500;
      line-height: 34px;
      color: #fff;

      img {
        width: 21px;
        height: 18px;
        margin-right: 39px;
      }

      transition: background 0.3s;

      &:hover {
        background: #565656;
      }
    }
  }
`;
