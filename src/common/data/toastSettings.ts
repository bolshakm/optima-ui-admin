import { DefaultToastOptions, ToastPosition } from 'react-hot-toast';

export const toastSettings: DefaultToastOptions = {
  duration: 4000,
  position: 'bottom-left' as ToastPosition,
  error: {
    style: {
      minWidth: 'max-content',
      width: 'max-content',
      padding: '10px',
      borderRadius: '7px',
      backgroundColor: '#fb0505b2',
      color: '#fff',
    },
  },
};
