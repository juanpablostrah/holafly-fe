import React from "react";

const Loader: React.FC = () => {
	return (
		<div className="flex justify-center items-center min-h-screen">
			<div
				style={{ borderTopColor: "#3498db" }}
				className="spinner border-4 border-t-4 border-gray-200 h-12 w-12 rounded-full animate-spin"
			></div>
			<p className="ml-4 text-gray-500">Cargando...</p>
		</div>
	);
};

export default Loader;
