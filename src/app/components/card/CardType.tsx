export type Consumption = {
	totalConsumption: number;
};

export type CardType = {
	userId: number;
	status: string;
	dateStart: string;
	dateEnd: string;
	consumption: Consumption;
	flag: string;
	country: string;
	plan: string;
};
