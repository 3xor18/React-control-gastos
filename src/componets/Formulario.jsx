import React, { useState } from 'react';
import { Error } from './Error';
import shortid from 'shortid';

export const Formulario = ({
	setGasto,
	setCrearGasto,
}) => {
	const [nombre, setNombre] = useState('');
	const [cantidad, setCantidad] = useState(0);
	const [error, setError] = useState(false);

	const handleName = ({
		target: { name, value },
	}) => {
		setNombre(value);
	};
	const handleCantidad = ({
		target: { name, value },
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
		const gasto = {
			nombre,
			cantidad,
			id: shortid.generate(),
		};
		setGasto(gasto);
		setNombre('');
		setCantidad(0);
		setCrearGasto(true);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Agregar los datos aqui</h2>
			{error && (
				<Error mensaje="Campos Obligatorios o monto errado" />
			)}

			<div className="campo">
				<label>Nombre del gasto</label>
				<input
					type="text"
					className="u-full-width"
					placeholder="Ejm. Transporte"
					name="nombre"
					value={nombre}
					onChange={handleName}
				/>
				<label>Cantidad del gasto</label>
				<input
					type="number"
					className="u-full-width"
					placeholder="300"
					name="cantidad"
					value={cantidad}
					onChange={handleCantidad}
				/>
				<input
					type="submit"
					className="button-primary u-full-width"
					value="Agregar gasto"
				/>
			</div>
		</form>
	);
};
