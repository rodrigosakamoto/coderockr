import styled from 'styled-components';

const InputBlock = styled.div`
  width: 100%;
  & + & {
    margin-top: 48px;
  }

  label {
    display: flex;
    color: #000;
    margin-bottom: 8px;
    line-height: 24px;
    font-size: 24px;
  }

  input,
  textarea {
    max-width: 100%;
    width: 100%;
    border: 1px solid #2d2d2d;
    outline: none;
    border-radius: 4px;
    font-size: 24px;
    line-height: 34px;
    color: #2d2d2d;

    &::placeholder {
      font-size: 24px;
      line-height: 34px;
      color: rgba(0, 0, 0, 0.51);
    }
  }
  input {
    height: 60px;
    padding: 16px 18px 9px;
  }
  textarea {
    min-height: 120px;
    max-height: 240px;
    resize: vertical;
    padding: 16px;
  }

  @media (max-width: 900px) {
    & + & {
      margin-top: 8px;
    }
  }
`;

export default InputBlock;
