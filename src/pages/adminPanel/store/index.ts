import { ICafeDto, ITexts } from 'common/types';
import { create } from 'zustand';

export interface IState {
  texts: ITexts;
  restaurantName: string;
  restaurant: ICafeDto | null;
}

export interface IAction {
  setTexts: (value: ITexts) => void;
  setRestaurantName: (value: string) => void;
  setRestaurant: (value: ICafeDto) => void;
}

export const useAdminStore = create<IState & IAction>((set) => ({
  texts: {} as ITexts,
  restaurant: null,
  restaurantName: '',
  setTexts: (texts) => set(() => ({ texts })),
  setRestaurantName: (restaurantName) => set(() => ({ restaurantName })),
  setRestaurant: (restaurant) => set(() => ({ restaurant })),
}));
