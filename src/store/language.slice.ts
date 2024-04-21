import { LanguageLow } from 'common/types';
import { generateErrorText } from 'common/utils';
import { create } from 'zustand';

export interface IState {
  currentLang: LanguageLow;
  errorText: string;
}

export interface IAction {
  setCurrentLang: (key: LanguageLow) => void;
}

export const useLanguageStore = create<IState & IAction>((set) => ({
  currentLang: 'en',
  errorText: generateErrorText('en'),
  setCurrentLang: (key) =>
    set(() => ({ currentLang: key, errorText: generateErrorText(key) })),
}));
