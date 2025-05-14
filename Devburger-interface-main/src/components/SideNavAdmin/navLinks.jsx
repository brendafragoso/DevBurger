import { Barcode, Notepad, StackPlus } from '@phosphor-icons/react';

export const navLinks = [
  {
    id: 1,
    label: 'Pedidos',
    path: '/admin/pedidos',
    icons: <Notepad />,
  },
  {
    id: 2,
    label: 'Produtos',
    path: '/admin/produtos',
    icons: <Barcode />,
  },
  {
    id: 3,
    label: 'Adicionar Produto',
    path: '/admin/novo-produto',
    icons: <StackPlus />,
  },
];
