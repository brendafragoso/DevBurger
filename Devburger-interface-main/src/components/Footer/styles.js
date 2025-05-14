import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: ${(props) => props.theme.darkPurple};
  width: 100%;

  p {
    color: ${(props) => props.theme.white};
    font-size: 14px;
    font-weight: lighter;
  }
`;
