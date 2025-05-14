import { CartProvider } from './CartContent';
import { UserProvider } from './UserContext';

export const AppProvider = ({ children }) => {
  return (
    <UserProvider>
      <CartProvider>{children}</CartProvider>
    </UserProvider>
  );
};
