import React, { useState } from 'react';
import { Error } from './Error';

export const Pregunta = ({
	setPresupuesto,
	setRestante,
	setMostrarPregunta,
}) => {
	const [cantidad, setCantidad] = useState(0);
	const [error, setError] = useState(false);

	const handleCantidad = ({
		target: { value, name },
	}) => {
		setCantidad(parseInt(value, 10));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (cantidad < 1 || isNaN(cantidad)) {
			setError(true);
			return;
		}
		setError(false);
		setPresupuesto(cantidad);
		setRestante(cantidad);
		setMostrarPregunta(false);
	};

	return (
		<div>
			<h2>Coloca tu presupuesto</h2>
			{error && (
				<Error mensaje="Presupuesto es incorrecto!" />
			)}
			<form onSubmit={handleSubmit}>
				<input
					type="number"
					className="u-full-width"
					placeholder="coloca tu presupuesto"
					name="cantidad"
					onChange={handleCantidad}
					value={cantidad}
				/>

				<input
					type="submit"
					className="button-primary u-full-width"
					value="Definir presupuesto"
				/>
			</form>
		</div>
	);
};
