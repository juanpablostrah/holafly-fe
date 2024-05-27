import React from "react";
import type { CardType } from "./CardType";
import "tailwindcss/tailwind.css";
import { Button } from "@material-tailwind/react";
import { CARD_STATUS } from "../../const";
import Calendar from "../Calendar";
import Circle from "../Circle";
import "./styles.css";

interface CardProps {
	card: CardType;
}

const Card = ({ card }: CardProps) => {
	const isExpired = card.status === CARD_STATUS.EXPIRED;
	const isActive = card.status === CARD_STATUS.ACTIVE;
	const isPending = card.status === CARD_STATUS.PENDING;

	const getButtonClass = (status: string) => {
		switch (status) {
			case CARD_STATUS.ACTIVE:
				return {
					buttonBgClass: "bg-button-active",
					buttonTextClass: "color-button-active",
					buttonBorderClass: "border-button-active",
					button1BgClass: "bg-button1-active",
					button1TextClass: "color-button1-active",
				};
			case CARD_STATUS.PENDING:
				return {
					buttonBgClass: "bg-button-pending",
					buttonTextClass: "color-button-pending",
					button1BgClass: "bg-button-pending",
					button1TextClass: "color-button-pending",
				};
			case CARD_STATUS.EXPIRED:
				return {
					buttonBgClass: "bg-button-expired",
					buttonTextClass: "color-button-expired",
				};
			default:
				return {};
		}
	};

	const getStatusClasses = (status: string) => {
		switch (status) {
			case CARD_STATUS.ACTIVE:
				return {
					bgClass: "bg-active",
					textClass: "text-active",
				};
			case CARD_STATUS.PENDING:
				return {
					bgClass: "bg-pending",
					textClass: "text-pending",
				};
			case CARD_STATUS.EXPIRED:
				return {
					bgClass: "bg-expired",
					textClass: "text-expired",
				};
			default:
				return {};
		}
	};

	const { bgClass, textClass } = getStatusClasses(card.status);
	const {
		buttonBgClass,
		buttonTextClass,
		buttonBorderClass,
		button1BgClass,
		button1TextClass,
	} = getButtonClass(card.status);

	return (
		<>
			<div
				style={{ width: "70%", height: "280px", marginBottom: 40 }}
				className="flex p-4 border-2 rounded w-1/2 mb-8 flex-col min-w-80"
			>
				<div
					className={`flex ${
						isExpired ? "justify-start" : "justify-around"
					} mb-4`}
				>
					<div className={`flex flex-col ${isExpired ? "w-full" : "w-1/2"}`}>
						<div
							className={`flex items-center ${bgClass} mb-4 rounded-2xl w-32`}
						>
							<img
								src={card.flag}
								alt={`Flag of ${card.country}`}
								className="w-8 h-8 rounded-full"
							/>
							<p className={`pr-4 pl-4 font-bold ${textClass}`}>
								{card.status}
							</p>
						</div>
						<p className="text-xl font-bold mb-4">{card.country}</p>
						{isExpired && (
							<p className="font-medium mb-4">
								{`${card.dateStart} - ${card.dateEnd}`}
							</p>
						)}
						<h2 className="mb-4">{card.plan}</h2>
					</div>

					{isActive ? (
						<Circle totalConsumption={card.consumption?.totalConsumption} />
					) : !isExpired ? (
						<Calendar />
					) : null}
				</div>

				{!isExpired && (
					<div className="mt-auto w-full">
						{isActive && (
							<Button
								className={`w-full mb-4 border ${buttonBgClass} ${buttonTextClass} ${buttonBorderClass}`}
							>
								View details
							</Button>
						)}
						<Button className={`w-full ${button1BgClass} ${button1TextClass}`}>
							{isActive
								? "Add more data"
								: isPending
								? "View details and install"
								: ""}
						</Button>
					</div>
				)}
			</div>
		</>
	);
};

export default Card;
