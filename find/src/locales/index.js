import { az } from './az';
import { ru } from './ru';

const translations = {
  az,
  ru
};

export const useTranslation = (lang = 'az') => {
  const t = (path) => {
    try {
      const keys = path.split('.');
      let result = translations[lang];
      
      for (const key of keys) {
        if (result === undefined) return path;
        result = result[key];
      }
      
      return result || path;
    } catch (error) {
      return path;
    }
  };

  return { t };
}; 