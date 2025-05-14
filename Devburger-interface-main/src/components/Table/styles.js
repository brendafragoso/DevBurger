import styled from 'styled-components';

export const Root = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${(props) => props.theme.veryLightGray};
  border-radius: 20px;
`;

export const Header = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
  padding: 16px;
  text-align: left;
  color: ${(props) => props.theme.veryLightGray};
  background-color: ${(props) => props.theme.secondBlack};
  border-bottom: 1px solis ${(props) => props.theme.lightGray};

  &:last-child {
    border-top-right-radius: 20px;
  }

  &:first-child {
    border-top-left-radius: 20px;
  }
`;

export const Td = styled.td`
  color: ${(props) => props.theme.secondBlack};
  padding: 16px;
  font-weight: 500;
  line-height: 115%;
`;

export const Body = styled.tbody``;
