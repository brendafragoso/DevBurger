import styled from 'styled-components';
import BannerHamburger from '../../assets/bannerCardapio.svg';
import Background from '../../assets/background.svg';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.secondWhite};

  background: linear-gradient(
      rgba(255, 255, 255, 0.68),
      rgba(255, 255, 255, 0.68)
    ),
    url('${Background}');
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  height: 415px;
  width: 100%;
  position: relative;

  background: url('${BannerHamburger}');
  background-color: ${(props) => props.theme.black};
  background-position: center;
  background-size: cover;

  h1 {
    font-family: 'Road Rage', serif;
    font-size: 80px;
    line-height: 65px;
    color: ${(props) => props.theme.white};
    position: absolute;

    right: 20%;
    top: 30%;

    span {
      display: block;
      color: ${(props) => props.theme.white};
      font-size: 20px;
    }
  }
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;
`;

export const CategoryButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background: none;
  color: ${(props) =>
    props.$isActiveCategory
      ? (props) => props.theme.purple
      : (props) => props.theme.dimGray};
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 5px;
  line-height: 20px;
  border: none;
  border-bottom: ${(props) =>
    props.$isActiveCategory && `3px solid ${(props) => props.theme.purple}`};
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 40px;
  gap: 60px;
  justify-content: center;
  max-width: 1280px;
  margin: 50px auto 0;
`;
