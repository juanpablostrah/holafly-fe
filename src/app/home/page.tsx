"use client";
import {
	Tab,
	TabPanel,
	Tabs,
	TabsBody,
	TabsHeader,
	ThemeProvider,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import Card from "../Card";
import { CARD_STATUS, HOST } from "../const";
import useCardStore from "../store/cardStore";

const HomePage = () => {
	const [tabStatus, setTabStatus] = useState("activePending");
	const { cards, setCards } = useCardStore((state) => ({
		cards: state.cards,
		setCards: state.setCards,
	}));

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
		<ThemeProvider>
			<div className="container mx-auto mt-8">
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
							<div
								style={{ width: "50%" }}
								className="flex flex-col items-center"
							>
								{activeAndPendingCards.length > 0 ? (
									activeAndPendingCards.map((card, index) => (
										<Card key={index} card={card}></Card>
									))
								) : (
									<p>No active or pending cards found.</p>
								)}
							</div>
						</TabPanel>
						<TabPanel key="expired" value="expired">
							{expiredCards.length > 0 ? (
								expiredCards.map((card, index) => (
									<Card key={index} card={card}></Card>
								))
							) : (
								<p>No expired cards found.</p>
							)}
						</TabPanel>
					</TabsBody>
				</Tabs>
			</div>
		</ThemeProvider>
	);
};

export default HomePage;
