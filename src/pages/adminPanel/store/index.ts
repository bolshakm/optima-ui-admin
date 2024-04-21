import { ICafe, ITexts } from 'common/types';
import { create } from 'zustand';

export interface IState {
  texts: ITexts;
  selectedRestaurant: ICafe | null;
  restaurantsList: ICafe[];
}

export interface IAction {
  setTexts: (value: ITexts) => void;
  setSelectedRestaurant: (value: ICafe) => void;
  setRestaurantsList: (value: ICafe[]) => void;
  addRestaurantToList: (value: ICafe) => void;
  removeRestaurantFromList: (id: number) => void;
  updateRestaurant: (value: ICafe) => void;
}

export const useAdminStore = create<IState & IAction>((set) => ({
  texts: {} as ITexts,
  selectedRestaurant: null,
  restaurantsList: [],
  setTexts: (texts) => set(() => ({ texts })),
  setSelectedRestaurant: (restaurant) =>
    set((state) => ({
      selectedRestaurant:
        state.selectedRestaurant?.id === restaurant.id ? null : restaurant,
    })),
  setRestaurantsList: (restaurantsList) => set(() => ({ restaurantsList })),
  addRestaurantToList: (restaurant) =>
    set((data) => ({
      restaurantsList: [...data.restaurantsList, restaurant],
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
