import { UserProps } from '@/models/users/user';
import { create } from 'zustand';

type ActionsProps = {
  addUser: (user: UserProps) => void;
  removeUser: (userId: string) => void;
};

type StoreProps = {
  state: {
    user: UserProps;
  };
  actions: ActionsProps;
};

const initalValues = {
  id: '',
  name: ''
};

export const useUserStore = create<StoreProps>((set) => ({
  state: {
    user: initalValues
  },
  actions: {
    addUser: (user) => set(() => ({ state: { user: user } })),
    removeUser: () => set({ state: { user: initalValues } })
  }
}));
