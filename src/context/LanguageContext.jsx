import React, { createContext, useState, useContext } from 'react';
import { RESOURCES } from '../constants';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt'); // Default to Portuguese
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleLanguage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
        setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
        setIsTransitioning(false);
    }, 300); // 300ms fade out duration
  };

  const content = RESOURCES[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, content, isTransitioning }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
