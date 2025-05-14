import Cart from '../../assets/cart.svg';
import { ContainerButton } from './style';

export function CartButton({ ...props }) {
  return (
    <ContainerButton {...props}>
      <img src={Cart} alt="carrinho-icon" />
    </ContainerButton>
  );
}
