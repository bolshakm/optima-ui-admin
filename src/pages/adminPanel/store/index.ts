import { cafeData } from 'common/data';
import { ICafe, ITexts } from 'common/types';
import { create } from 'zustand';

export interface IState {
  texts: ITexts;
  restaurantName: string;
  restaurantsList: ICafe[];
}

export interface IAction {
  setTexts: (value: ITexts) => void;
  setRestaurantName: (value: string) => void;
  setRestaurantsList: (value: ICafe[]) => void;
  addRestaurantToList: (value: ICafe) => void;
  removeRestaurantFromList: (id: number) => void;
  updateRestaurant: (value: ICafe) => void;
}

export const useAdminStore = create<IState & IAction>((set) => ({
  texts: {} as ITexts,
  restaurantName: '',
  restaurantsList: [cafeData],
  setTexts: (texts) => set(() => ({ texts })),
  setRestaurantName: (restaurantName) => set(() => ({ restaurantName })),
  setRestaurantsList: (restaurantsList) => set(() => ({ restaurantsList })),
  addRestaurantToList: (restaurant) =>
    set((data) => ({
      restaurantsList: { ...data.restaurantsList, restaurant },
    })),
  removeRestaurantFromList: (id) =>
    set((data) => ({
      restaurantsList: data.restaurantsList.filter((item) => item.id !== id),
    })),
  updateRestaurant: (restaurant) =>
    set((data) => ({
      restaurantsList: data.restaurantsList.map((item) =>
        item.id === restaurant.id ? restaurant : item
      ),
    })),
}));
