import { Outlet } from 'react-router-dom';
import { Footer, Header } from './../../components';

export function UserLayiout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
