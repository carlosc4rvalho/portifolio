import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './loadingscreen.css';

const LoadingScreen: React.FC = () => {
  // const [isVisible, setIsVisible] = useState<boolean>(true);
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState<number>(0);
  const { t, i18n } = useTranslation();

  const languages: string[] = ['en', 'fr', 'es', 'de', 'it', 'pt']; 
  const loadingTexts: Record<string, string> = {
    en: 'Hello...',
    fr: 'Bonjour...',
    es: 'مرحبًا...',
    de: 'Hola...',
    it: 'こんにちは...',
    pt: 'Olá...',
  };

  const maxTimeInSeconds = 5; 

  useEffect(() => {
    document.body.classList.add('no-scroll');

    const maxLanguageIndex = languages.length - 1;

    const intervalId = setInterval(() => {
      setCurrentLanguageIndex((prevIndex) => {
        if (prevIndex === maxLanguageIndex) {
          // setIsVisible(false); // Remova esta linha
          clearInterval(intervalId); 
          document.body.classList.remove('no-scroll');
          return prevIndex; 
        }
        return prevIndex + 1; 
      });
    }, (maxTimeInSeconds * 400) / maxLanguageIndex);

    return () => {
      clearInterval(intervalId);
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <div className="loading-screen">
      <div className="loading-text">
        {loadingTexts[languages[currentLanguageIndex]]}
      </div>
    </div>
  );
};

export default LoadingScreen;