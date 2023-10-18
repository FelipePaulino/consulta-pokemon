import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LogoContextType {
  showLogo: boolean;
  setShowLogo: (showLogo: boolean) => void;
}

const LogoContext = createContext<LogoContextType | undefined>(undefined);

interface ClockProviderProps {
  children: ReactNode;
}

export function LogoProvider({ children }: ClockProviderProps) {
  const [showLogo, setShowLogo] = useState<boolean>(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowLogo(false);
    }, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <LogoContext.Provider value={{ showLogo, setShowLogo }}>
      {children}
    </LogoContext.Provider>
  );
}

export function useLogo() {
  const context = useContext(LogoContext);
  if (!context) {
    throw new Error('useLogo should be used inside LogoProvider');
  }
  return context;
}
