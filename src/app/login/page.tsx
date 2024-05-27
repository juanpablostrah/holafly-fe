"use client";

import { Button, Input, ThemeProvider } from "@material-tailwind/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React, { Suspense, useState } from "react";
import useUserStore from "../../store/userStore";
import { HOST } from "../../utils/const";
const Loader = dynamic(() => import("../../components/Loader"), { ssr: false });

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
			<Suspense fallback={<Loader />}>
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
										crossOrigin
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
										crossOrigin
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
			</Suspense>
		</ThemeProvider>
	);
};

export default LoginPage;
