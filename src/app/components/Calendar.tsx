import React from "react";

const Calendar = () => {
	return (
		<div>
			<div
				style={{
					position: "relative",
					border: "1.5px solid black",
					borderBottom: "none",
					width: 100,
					height: 20,
					borderRadius: "10px 10px 0 0",
				}}
			>
				<div
					style={{
						position: "absolute",
						top: -5,
						left: 25,
						width: 50,
						height: 10,
						borderLeft: "1.5px solid black",
						borderRight: "1.5px solid black",
					}}
				/>
			</div>
			<div
				className="flex flex-col justify-center items-center"
				style={{
					border: "1.5px solid black",
					width: 100,
					height: 70,
					borderRadius: "0 0 10px 10px",
				}}
			>
				<p className="m-0 font-bold">0</p>
				<p className="m-0">/0 days</p>
			</div>
		</div>
	);
};

export default Calendar;
