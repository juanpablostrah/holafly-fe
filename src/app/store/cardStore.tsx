import { create } from "zustand";
import { CardType } from "../components/card/CardType";

type CardStore = {
	cards: CardType[] | [];
	setCards: (cards: CardType[]) => void;
};

const useCardStore = create<CardStore>((set) => ({
	cards: [],
	setCards: (cards) => set({ cards }),
}));

export default useCardStore;
