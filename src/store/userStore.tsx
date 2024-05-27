import { create } from "zustand";

type User = {
	id: number;
	name: string;
	email: string;
};

type UserStore = {
	user: User | null;
	setUser: (user: User) => void;
};

const useUserStore = create<UserStore>((set) => ({
	user: null,
	setUser: (user) => set({ user }),
}));

export default useUserStore;
