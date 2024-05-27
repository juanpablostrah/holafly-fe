import { CARD_STATUS } from "@/app/const";

export type Consumption = {
	totalConsumption: number;
};

export type CardType = {
	userId: number;
	status: CARD_STATUS;
	dateStart: string;
	dateEnd: string;
	consumption: Consumption;
	flag: string;
	country: string;
	plan: string;
};
