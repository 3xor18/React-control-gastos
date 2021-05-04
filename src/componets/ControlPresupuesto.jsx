import React from 'react';
import { revisarPresupuesto } from '../helpers/helpers';

export const ControlPresupuesto = ({
	restante = 0,
	presupuesto = 0,
}) => {
	return (
		<div>
			<div className="alert alert-primary">
				Presupuesto:{presupuesto}
			</div>

			<div
				className={revisarPresupuesto(
					presupuesto,
					restante
				)}
			>
				restante:{restante}
			</div>
		</div>
	);
};
