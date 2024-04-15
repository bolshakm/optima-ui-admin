export type Language = 'EN' | 'ES' | 'CA' | 'FR' | 'UA' | 'IT' | 'DE';
export type LanguageLow = 'en' | 'es' | 'ca' | 'fr' | 'uk' | 'it' | 'de';

export type LanguageSet = {
  [key in Language]: LanguageLow;
};

export type LanguageKey = 'login' | 'registration' | 'admin';

export interface ITexts {
  [key: string]: string;
}
