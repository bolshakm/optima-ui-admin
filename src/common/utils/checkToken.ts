import { storageKeys } from 'common/constants';
import { jwtDecode } from 'jwt-decode';

interface IToken {
  sub: string;
  iat: number;
  exp: number;
}

export function checkToken() {
  const token = localStorage.getItem(storageKeys.token);

  if (token) {
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const { exp }: IToken = jwtDecode(token);

    const isTokenFreshEnought = currentTimestamp < exp;

    if (!isTokenFreshEnought) {
      localStorage.removeItem(storageKeys.token);
    }
  }
}
