import React from "react";
import type { Card } from "./types/CardType";
import "tailwindcss/tailwind.css";
import { Button } from "@material-tailwind/react";
import { CARD_STATUS } from "./const";
import Calendar from "./Calendar";
import Circle from "./Circle";

interface CardProps {
	card: Card;
}

const Card = ({ card }: CardProps) => {
	const getStatusStyles = (status: string) => {
		switch (status) {
			case CARD_STATUS.ACTIVE:
				return {
					backgroundColor: "#eaf3ff",
					color: "#506e9c",
				};
			case CARD_STATUS.PENDING:
				return {
					backgroundColor: "#fff8eb",
					color: "#c4ac87",
				};
			case CARD_STATUS.EXPIRED:
				return {
					backgroundColor: "#e4e6ea",
					color: "#6f7175",
				};
		}
	};

	const styles = getStatusStyles(card.status);
	return (
		<>
			<div
				style={{ width: "70%", height: "280px", marginBottom: 40 }}
				className="flex p-4 border-2 rounded w-1/2 mb-8 flex-col"
			>
				<div
					style={{ justifyContent: "space-around" }}
					className="flex justify-around"
				>
					<div className="w-1/2 ">
						<div
							style={{ backgroundColor: styles?.backgroundColor }}
							className="flex items-center bg-orange-50 mb-4 rounded-2xl w-32"
						>
							<img
								src={card.flag}
								alt={`Flag of ${card.country}`}
								className="w-8 h-8 rounded-full"
							/>
							<p
								style={{
									paddingRight: 15,
									paddingLeft: 15,
									color: styles?.color,
								}}
								className="pr-4 pl-4 font-bold"
							>
								{card.status}
							</p>
						</div>
						<p className="text-xl font-bold mb-4">{card.country}</p>
						<h2 className="mb-4">{card.plan}</h2>
					</div>

					{card.status === CARD_STATUS.ACTIVE ? (
						<Circle totalConsumption={card.consumption.totalConsumption} />
					) : card.status !== CARD_STATUS.EXPIRED ? (
						<Calendar />
					) : (
						<></>
					)}
				</div>

				<div className="mt-auto w-full">
					{card.status === CARD_STATUS.ACTIVE && (
						<Button
							style={{
								backgroundColor: "#fff",
								color: "#444648",
								borderColor: "#9a9b9d",
							}}
							className="w-full mb-4 border"
							color="blue"
						>
							View details
						</Button>
					)}
					<Button
						style={{
							backgroundColor:
								card.status === CARD_STATUS.ACTIVE ? "#48ec86" : "#cd1150",
							color: card.status === CARD_STATUS.ACTIVE ? "#305843" : "",
						}}
						color="blue"
						className="w-full"
					>
						{/* {card.status === CARD_STATUS.ACTIVE && (
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNzMY1ECgjCYA6coTRqeTrub5urlYfyT4RoTOxgbXCdA&s"
							alt="thunder"
						/>
					)} */}

						{card.status === CARD_STATUS.ACTIVE
							? "Add more data"
							: card.status === CARD_STATUS.PENDING
							? "View details and install"
							: ""}
					</Button>
				</div>
			</div>
		</>
	);
};

export default Card;
