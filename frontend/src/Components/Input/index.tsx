import styled from 'styled-components';

export const InputText = styled.input`
  height: 45px;
  border-radius: 8px;
  padding: 10px;
  display: block;
  width: 90%;
  background:  rgba(255, 255, 255, 0.15);
  border: 1px solid;
  border-color: #00000099;
  outline: none;
  font-size: 1rem;

  &::placeholder {
      text-align: center;
      text-justify: distribute;
      align-content: center;
      color: #858585;
      font-size: 12px;
      @media(min-width: 800px) {
        font-size: 1rem;
        text-align: left;
      }
  }
`;