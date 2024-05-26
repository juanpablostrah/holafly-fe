"use client";

import { Button, Input, ThemeProvider } from "@material-tailwind/react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { HOST } from "../const";
import useUserStore from "../store/userStore";

const LoginPage: React.FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const setUser = useUserStore((state) => state.setUser);
	const router = useRouter();

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const url = `${HOST}/auth/login`;
		try {
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email,
					password,
				}),
			});

			if (!response.ok) {
				throw new Error("response");
			}
			const userData = await response.json();
			setUser(userData);
			localStorage.setItem("authToken", userData.access_token);
			router.push("/home");
		} catch (error) {
			console.error("Error:", error);
			alert(error);
		}
	};

	return (
		<ThemeProvider>
			<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-md w-full space-y-8">
					<div>
						<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
							Login
						</h2>
					</div>
					<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
						<div className="rounded-md shadow-sm -space-y-px">
							<div className="mb-4">
								<Input
									id="email-address"
									name="email"
									type="email"
									autoComplete="email"
									required
									value={email}
									onChange={handleEmailChange}
									variant="outlined"
									size="lg"
									label="Correo electrónico"
								/>
							</div>
							<div>
								<Input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									value={password}
									onChange={handlePasswordChange}
									variant="outlined"
									size="lg"
									label="Contraseña"
								/>
							</div>
						</div>

						<div>
							<Button type="submit" color="blue" fullWidth>
								Iniciar sesión
							</Button>
						</div>
					</form>
				</div>
			</div>
		</ThemeProvider>
	);
};

export default LoginPage;
