'use client';

import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { createContext, useEffect, useState } from 'react';

import { IAuthUser } from '../interfaces/IAuthUser';
import { IToken } from '../interfaces/IToken';
import { useRouter } from 'next/navigation';

type AuthContextProps = {
  user: IAuthUser | null;
  token: string;
  isLoggedIn: boolean;
  signIn: (access_token: string) => void;
  signOut: () => void;
};

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IAuthUser | null>(null);
  const [token, setToken] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();

  function setCookies(user: IAuthUser, token: string, isLoggedIn: boolean) {
    Cookies.set('user', JSON.stringify(user));
    Cookies.set('token', token);
    Cookies.set('isLoggedIn', 'true');
  }

  function removeCookies() {
    Cookies.remove('user');
    Cookies.remove('token');
    Cookies.set('isLoggedIn', 'false');
  }

  function loadCookies() {
    const user = Cookies.get('user');
    const token = Cookies.get('token');
    const isLoggedIn = Cookies.get('isLoggedIn');

    if (!user || !token || !isLoggedIn) {
      signOut();
      return;
    }

    setUser(JSON.parse(user));
    setToken(token);
    setIsLoggedIn(Boolean(isLoggedIn));
  }

  function signIn(access_token: string) {
    const decodedToken: IToken = jwtDecode(access_token);
    const { sub: id, email } = decodedToken;
    const user = { id, email };

    setCookies(user, access_token, true);

    setUser(user);
    setToken(access_token);
    setIsLoggedIn(true);
  }

  function signOut() {
    removeCookies();

    setUser(null);
    setToken('');
    setIsLoggedIn(false);

    router.push('/login');
  }

  useEffect(() => {
    loadCookies();
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, isLoggedIn, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
