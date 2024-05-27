import React from "react";

const Calendar = () => {
	return (
		<div>
			<div className="relative border-t-2 border-r-2 border-l-2 border-black border-b-0 w-24 h-5 rounded-t-lg">
				<div className="absolute -top-1.5 left-6 w-12 h-2.5 border-l-2 border-r-2 border-black" />
			</div>
			<div className="flex flex-col justify-center items-center border-2 border-black w-24 h-16 rounded-b-lg">
				<p className="m-0 font-bold">0</p>
				<p className="m-0">/0 days</p>
			</div>
		</div>
	);
};

export default Calendar;
