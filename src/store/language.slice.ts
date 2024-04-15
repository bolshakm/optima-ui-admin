import { LanguageLow } from 'common/types';
import { create } from 'zustand';

export interface IState {
  currentLang: LanguageLow;
}

export interface IAction {
  setCurrentLang: (key: LanguageLow) => void;
}

export const useLanguageStore = create<IState & IAction>((set) => ({
  currentLang: 'en',
  setCurrentLang: (key) => set(() => ({ currentLang: key })),
}));
