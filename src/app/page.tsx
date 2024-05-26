"use client";

import { ThemeProvider } from "@material-tailwind/react";
import LoginPage from "./login/page";

export default function Home() {
	return (
		<ThemeProvider>
			<LoginPage />
		</ThemeProvider>
	);
}
