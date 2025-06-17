import { Domains, OptionsDomain, UseProfile } from 'contants/interface';
import React, { ReactNode, createContext, useState } from 'react';
import { getAuth } from 'utils/jwt';

interface AppProviderProps {
  children: ReactNode;
}

interface AppContextProps {
  showNavbar: boolean;
  setShowNavbar: (value: any) => void;
  userProfile: UseProfile | null;
  setUserProfile: (value: UseProfile) => void;
  optionsDomain: OptionsDomain[];
  setOptionsDomain: (data: OptionsDomain[]) => void;
  domains: Domains;
  setDomains: (data: Domains) => void;
}
const defaultValue = {
  showNavbar: false,
  userProfile: null,
  optionsDomain: [],
  domains: {
    domainActive: '',
    siteActiveId: null,
    domainName: '',
  },
  setShowNavbar: () => {
    throw new Error('setShowNavbar function must be overridden');
  },
  setUserProfile: () => {
    throw new Error('setUserProfile function must be overridden');
  },
  setOptionsDomain: () => {
    throw new Error('setOptionsDomain function must be overridden');
  },
  setDomains: () => {
    throw new Error('setDomains function must be overridden');
  },
};

export const AppContext = createContext<AppContextProps>(defaultValue);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const userInfo = getAuth();
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<UseProfile>(userInfo);
  const [optionsDomain, setOptionsDomain] = useState<OptionsDomain[]>([]);
  const [domains, setDomains] = useState<Domains>({
    domainActive: '',
    siteActiveId: null,
    domainName: '',
  });

  const value = {
    showNavbar,
    setShowNavbar,
    userProfile,
    setUserProfile,
    optionsDomain,
    setOptionsDomain,
    domains,
    setDomains,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
