import React, { ReactNode, createContext, useState } from 'react';
import { getAuth } from 'utils/jwt';

interface AppProviderProps {
  children: ReactNode;
}

interface AppContextProps {
  showNavbar: boolean;
  setShowNavbar: (value: any) => void;
  userProfile: any;
  setUserProfile: (value: any) => void;
}
const defaultValue = {
  showNavbar: false,
  userProfile: null,

  setShowNavbar: () => {
    throw new Error('setShowNavbar function must be overridden');
  },
  setUserProfile: () => {
    throw new Error('setUserProfile function must be overridden');
  },
};

export const AppContext = createContext<AppContextProps>(defaultValue);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const userInfo = getAuth();
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<any>(userInfo);

  const value = {
    showNavbar,
    setShowNavbar,
    userProfile,
    setUserProfile,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
