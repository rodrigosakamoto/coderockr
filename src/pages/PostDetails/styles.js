import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DetailsContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 100px auto;
  background: #fff;

  @media (max-width: 900px) {
    margin: 100px 20px;
  }
`;

export const DetailsHeader = styled.div`
  display: flex;
  align-items: center;

  > div {
    width: 100%;
    img {
      max-width: 640px;
      width: 100%;
      height: 640px;
    }
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div {
      display: flex;
      justify-content: center;
      img {
        height: 320px;
      }
    }
  }
`;

export const DetailsHeaderContent = styled.div`
  max-width: 640px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    max-width: 400px;
    height: 236px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
      font-size: 18px;
      color: #032937;
      line-height: 26px;
    }

    p {
      font-size: 24px;
      line-height: 34px;
      color: #2d2d2d;
    }

    h2 {
      font-size: 36px;
      line-height: 43px;
      font-weight: bold;
      color: #f1a10a;
    }
  }

  @media (max-width: 900px) {
    div {
      text-align: center;
    }
  }
`;

export const DetailsContent = styled.div`
  width: 100%;

  padding: 124px 250px 168px;

  div {
    max-width: 780px;
    margin: 0 auto;
  }

  p {
    font-size: 24px;
    line-height: 34px;

    color: #2d2d2d;
  }

  @media (max-width: 900px) {
    padding: 0 80px 168px;
  }
`;
