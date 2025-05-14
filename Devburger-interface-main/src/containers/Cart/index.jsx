import Logo from '../../assets/Logo.svg';
import { CartItems, CartResumo } from '../../components';
import { Banner, Container, Content, Title } from './styles';

export function Cart() {
  return (
    <Container>
      <Banner>
        <img src={Logo} alt="logo devburger" />
      </Banner>
      <Title>Checkout - Pedido</Title>
      <Content>
        <CartItems />
        <CartResumo />
      </Content>
    </Container>
  );
}
