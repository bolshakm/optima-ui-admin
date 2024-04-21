import { LanguageLow } from 'common/types';

type Texts = {
  [key in LanguageLow]: string;
};

export const generateErrorText = (language: LanguageLow): string => {
  const texts: Texts = {
    en: 'Oops! Something wrong, please try again',
    es: '¡Vaya! Algo salió mal, por favor inténtalo de nuevo',
    ca: 'Oops! Alguna cosa ha anat malament, si us plau torna-ho a provar',
    fr: 'Oups! Quelque chose s\'est mal passé, veuillez réessayer',
    uk: 'Упс! Щось пішло не так, спробуйте ще раз',
    it: 'Ops! Qualcosa è andato storto, riprova per favore',
    de: 'Hoppla! Etwas ist schief gelaufen, bitte versuchen Sie es erneut',
  };

  return texts[language] || texts.en;
};

