import React from 'react';
import { DetailGasto } from './DetailGasto';

export const Listado = ({ gastos }) => {
	return (
		<div className="gastos-realizados">
			{gastos.map((gasto) => (
				<DetailGasto
					key={gasto.id}
					gasto={gasto}
				/>
			))}
		</div>
	);
};
