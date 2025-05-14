import styled from 'styled-components';

export const Container = styled.div``;

export const ProductImage = styled.img`
  height: 80px;
  width: 90px;
  padding: 7px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.softGray};
`;

export const EditButton = styled.button`
  height: 32px;
  width: 32px;
  border: none;
  background-color: transparent;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 20px;
    width: 20px;
  }

  &:hover {
    background-color: ${(props) => props.theme.purple};
    border-radius: 8px;
    svg {
      fill: ${(props) => props.theme.white};
    }
  }
`;
