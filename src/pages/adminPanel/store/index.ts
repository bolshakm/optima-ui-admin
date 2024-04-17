import { ITexts } from 'common/types';
import { create } from 'zustand';

export interface IState {
  texts: ITexts;
  restourantName: string;
}

export interface IAction {
  setTexts: (value: ITexts) => void;
  setRestourantName: (value: string) => void;
}

export const useAdminStore = create<IState & IAction>((set) => ({
  texts: {} as ITexts,
  restourantName: '',
  setTexts: (texts) => set(() => ({ texts })),
  setRestourantName: (restourantName) => set(() => ({ restourantName })),
}));
