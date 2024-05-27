import React from "react";

type CircleProps = {
	totalConsumption: number;
};

const Circle = (circleProps: CircleProps) => {
	const convertKBToGB = (totalconsumptionInKB: number): number => {
		return totalconsumptionInKB / 1048576;
	};
	return (
		<div
			className="flex flex-col justify-center items-center rounded-full"
			style={{
				border: "1.5px solid black",
				width: "94px",
				height: "94px",
			}}
		>
			<span className="text-center text-xl font-bold">
				{convertKBToGB(circleProps.totalConsumption)}
			</span>
		</div>
	);
};

export default Circle;
