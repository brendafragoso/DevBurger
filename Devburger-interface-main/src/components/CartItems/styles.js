import styled from 'styled-components';

export const ProductImage = styled.img`
  height: 80px;
  width: 90px;
  border-radius: 16px;

  padding: 7px;
  background-color: ${(props) => props.theme.softGray};
  border-radius: 15px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 22px;
    width: 22px;
    color: ${(props) => props.theme.white};
    border: none;
    border-radius: 4px;
    background-color: ${(props) => props.theme.purple};
    transition: all 100ms;

    &:hover {
      background: ${(props) => props.theme.secondDarkPurple};
    }
  }
`;

export const EmptyCart = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`;

export const ProductTotalPrice = styled.p`
  font-weight: bold;
`;

export const TrashContainer = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
`;
