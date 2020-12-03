import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
`;

export const SmallCard = styled(Link)`
  text-decoration: none;
  width: 50%;
  height: 320px;

  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  margin: 80px 0;

  &:nth-child(6n + 1),
  &:nth-child(6n + 2) {
    flex-direction: row;
  }

  > div.image-container {
    width: 100%;
    max-width: 320px;
    height: 320px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 900px) {
    width: 100%;

    margin: 60px 0 0;
  }
`;

export const SmallCardInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  position: relative;

  div.icon {
    text-decoration: none;
    position: absolute;
    bottom: 5%;
    right: 5%;
    cursor: pointer;

    img {
      width: 24px;
      height: 16px;
    }
  }
`;

export const SmallCardInfo = styled.div`
  width: 100%;
  max-width: 480px;
  height: 250px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  overflow: hidden;

  p {
    font-size: 24px;
    line-height: 34px;
    color: #2d2d2d;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h2 {
    font-size: 36px;
    font-weight: bold;
    line-height: 43px;

    color: #f1a10a;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @media (max-width: 900px) {
    p {
      font-size: 16px;
    }

    h2 {
      font-size: 24px;
    }
  }
`;

export const BigCard = styled(Link)`
  text-decoration: none;

  width: 100%;
  display: flex;
  justify-content: flex-end;

  &:nth-child(2n) {
    justify-content: flex-start;
  }

  img {
    width: 100%;
    max-width: 640px;
    height: 640px;
  }

  @media (max-width: 900px) {
    margin-top: 60px;
    img {
      height: 300px;
    }
  }
`;

export const BigCardInfoContainer = styled.div`
  max-width: 640px;
  width: 100%;
  height: 640px;

  background: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  position: relative;

  > div.icon {
    text-decoration: none;
    position: absolute;
    bottom: 5%;
    right: 5%;
    cursor: pointer;

    img {
      width: 24px;
      height: 16px;
    }
  }

  @media (max-width: 900px) {
    height: 300px;
  }
`;

export const BigCardInfo = styled.div`
  max-width: 480px;
  height: 315px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-size: 24px;
    line-height: 34px;
    color: #2d2d2d;

    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h2 {
    font-size: 36px;
    font-weight: bold;
    line-height: 43px;

    color: #f1a10a;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 900px) {
    height: 250px;
    p {
      -webkit-line-clamp: 3;
      font-size: 16px;
    }

    h2 {
      -webkit-line-clamp: 2;
      font-size: 24px;
    }
  }
`;
