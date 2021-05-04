import React from 'react';

export const DetailGasto = ({
	gasto: { nombre, cantidad, id },
}) => {
	return (
		<li className="gastos">
			<p>
				{nombre}
				<span className="gasto">${cantidad}</span>
			</p>
		</li>
	);
};
