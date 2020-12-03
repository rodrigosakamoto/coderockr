import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NewPostContent = styled.div`
  max-width: 1280px;
  width: 100%;
  background: #fff;
  margin: 100px auto;

  display: flex;
  justify-content: center;

  form {
    max-width: 565px;
    width: 100%;
    margin: 106px auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    > img {
      max-width: 400px;
      width: 100%;
    }

    h2 {
      font-size: 36px;
      font-weight: bold;
      color: #f1a10a;
      margin: 78px 0 47px;
    }

    button {
      height: 60px;
      width: 254px;
      background: #2d2d2d;
      border: none;
      border-radius: 4px;
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 24px;
      font-weight: 500;
      color: #fff;

      margin-top: 81px;

      transition: background 0.3s;

      &:hover {
        background: #565656;
      }

      img {
        margin-right: 29px;
      }
    }
  }
`;
