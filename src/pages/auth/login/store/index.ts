import { ITexts } from 'common/types';
import { create } from 'zustand';

export interface IState {
  texts: ITexts;
}

export interface IAction {
  setTexts: (value: ITexts) => void;
}

export const useLoginStore = create<IState & IAction>((set) => ({
  texts: {} as ITexts,
  setTexts: (texts) => set(() => ({ texts })),
}));
