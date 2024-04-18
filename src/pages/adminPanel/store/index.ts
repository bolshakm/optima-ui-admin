import { ICafe, ICafeDto, ITexts } from 'common/types';
import { create } from 'zustand';

export interface IState {
  texts: ITexts;
  restaurantName: string;
  restaurant: ICafeDto | null;
  restaurantsList: ICafe[];
}

export interface IAction {
  setTexts: (value: ITexts) => void;
  setRestaurantName: (value: string) => void;
  setRestaurant: (value: ICafeDto | null) => void;
  setRestaurantsList: (value: ICafe[]) => void;
  addRestaurantToList: (value: ICafe) => void;
  removeRestaurantFromList: (id: number) => void;
}

export const useAdminStore = create<IState & IAction>((set) => ({
  texts: {} as ITexts,
  restaurant: null,
  restaurantName: '',
  restaurantsList: [],
  setTexts: (texts) => set(() => ({ texts })),
  setRestaurantName: (restaurantName) => set(() => ({ restaurantName })),
  setRestaurant: (restaurant) => set(() => ({ restaurant })),
  setRestaurantsList: (restaurantsList) => set(() => ({ restaurantsList })),
  addRestaurantToList: (restaurant) =>
    set((data) => ({
      restaurantsList: { ...data.restaurantsList, restaurant },
    })),
  removeRestaurantFromList: (id) =>
    set((data) => ({
      restaurantsList: data.restaurantsList.filter((item) => item.id !== id),
    })),
}));
