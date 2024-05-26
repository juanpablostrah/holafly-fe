import { create } from "zustand";
import { Card } from "../types/CardType";

type CardStore = {
	cards: Card[] | [];
	setCards: (cards: Card[]) => void;
};

const useCardStore = create<CardStore>((set) => ({
	cards: [],
	setCards: (cards) => set({ cards }),
}));

export default useCardStore;
