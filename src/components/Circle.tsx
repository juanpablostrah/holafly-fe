import React from "react";

type CircleProps = {
	totalConsumption: number;
};

const Circle = (circleProps: CircleProps) => {
	const convertKBToGB = (totalconsumptionInKB: number): string => {
		const consumptionInKb = totalconsumptionInKB / 1048576;
		return consumptionInKb.toFixed(2);
	};
	return (
		<div className="flex flex-col justify-center items-center rounded-full w-24 h-24 border-2 border-black">
			<span className="text-center text-xl font-bold">
				{convertKBToGB(circleProps.totalConsumption)}
			</span>
		</div>
	);
};

export default Circle;
