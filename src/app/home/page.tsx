"use client";
import {
	Tab,
	TabPanel,
	Tabs,
	TabsBody,
	TabsHeader,
	ThemeProvider,
} from "@material-tailwind/react";
import React, { useEffect } from "react";
import Card from "../components/card/Card";
import { CARD_STATUS, HOST } from "../utils/const";
import useCardStore from "../store/cardStore";
import { CardType } from "../components/card/CardType";

const HomePage = () => {
	const { cards, setCards } = useCardStore((state) => ({
		cards: state.cards,
		setCards: state.setCards,
	}));

	console.log("cardsRedux: ", cards);

	useEffect(() => {
		getCards();
	}, []);

	const getCards = async () => {
		const url = `${HOST}/cards/for`;
		const token = localStorage.getItem("authToken");

		try {
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					token,
				}),
			});

			if (!response.ok) {
				throw new Error("response");
			}
			const cards = await response.json();
			setCards(cards);
		} catch (error) {
			console.error("Error:", error);
			alert(error);
		}
	};

	const activeAndPendingCards = cards.filter(
		(card) =>
			card.status === CARD_STATUS.ACTIVE || card.status === CARD_STATUS.PENDING
	);
	const expiredCards = cards.filter(
		(card) => card.status === CARD_STATUS.EXPIRED
	);

	return (
		<div className="container mx-auto mt-8 w-2/5">
			<Tabs>
				<TabsHeader>
					<Tab key="activePending" value="activePending">
						Active/Pending
					</Tab>
					<Tab key="expired" value="expired">
						Expired
					</Tab>
				</TabsHeader>
				<TabsBody>
					<TabPanel key="activePending" value="activePending">
						<div className="flex flex-col items-center w-1/2">
							{activeAndPendingCards.length > 0 ? (
								activeAndPendingCards.map((card, index) => (
									<Card key={index} card={card} />
								))
							) : (
								<p>No active or pending cards found.</p>
							)}
						</div>
					</TabPanel>
					<TabPanel key="expired" value="expired">
						<div className="flex flex-col items-center w-1/2">
							{expiredCards.length > 0 ? (
								expiredCards.map((card, index) => (
									<Card key={index} card={card}></Card>
								))
							) : (
								<p>No active or pending cards found.</p>
							)}
						</div>
					</TabPanel>
				</TabsBody>
			</Tabs>
		</div>
	);
};

export default HomePage;
