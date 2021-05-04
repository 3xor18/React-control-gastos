import React from 'react';

export const Error = ({
	mensaje = 'Hubo un Error',
}) => {
	return (
		<div>
			<p className="alert alert-danger error">
				{mensaje}
			</p>
		</div>
	);
};
