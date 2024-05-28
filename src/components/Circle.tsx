import React from "react";

type CircleProps = {
	totalConsumption: number;
	plan: string;
};

const Circle = (circleProps: CircleProps) => {
	const convertKBToGB = (totalconsumptionInKB: number): string => {
		const consumptionInKb = totalconsumptionInKB / 1048576;
		return consumptionInKb.toFixed(2);
	};
	const extractData = (plan: string): string => {
		const regex = /(\d+GB)/;
		const match = plan.match(regex);
		if (match && match[1]) {
			return match[1];
		}
		return "";
	};

	return (
		<div className="flex flex-col justify-center items-center rounded-full w-24 h-24 border-2 border-black">
			<span className="text-center text-xl font-bold">
				{convertKBToGB(circleProps.totalConsumption)}
			</span>
			<p className="m-0">{`/${extractData(circleProps.plan)}`}</p>
		</div>
	);
};

export default Circle;
