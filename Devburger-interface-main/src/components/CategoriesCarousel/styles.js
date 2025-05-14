import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  .carousel-item {
    padding-right: 40px;
  }

  .react-multiple-carousel__arrow--left {
    left: calc(0.5% + 1px);
    top: 30%;
  }

  .react-multiple-carousel__arrow--right {
    right: 50px;
    top: 30%;
  }

  padding-left: 40px;
  cursor: grab;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: ${(props) => props.theme.purple};
  padding: 20px;
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin-bottom: 40px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: ${(props) => props.theme.purple};
    left: calc(50% - 28px);
  }
`;

export const ContainerItems = styled.div`
  background: url('${(props) => props.imageUrl}');
  background-position: center;
  background-size: cover;
  border-radius: 20px;

  display: flex;
  align-items: center;
  padding: 20px 10px;
  width: 100%;
  height: 190px;
`;

export const CategoryButton = styled.button`
  color: ${(props) => props.theme.white};
  background-color: rgba(0, 0, 0, 0.5);
  padding: 4px 30px;
  border-radius: 15px;
  font-size: 22.5px;
  font-weight: 500;
  margin-top: 90px;
  margin-left: 15px;
  text-decoration: none;
  border: none;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`;
