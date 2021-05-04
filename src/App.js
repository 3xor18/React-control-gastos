import { useEffect, useState } from 'react';
import { ControlPresupuesto } from './componets/ControlPresupuesto';
import { Formulario } from './componets/Formulario';
import { Listado } from './componets/Listado';
import { Pregunta } from './componets/Pregunta';

function App() {
	const [presupuesto, setPresupuesto] = useState(
		0
	);

	const [restante, setRestante] = useState(0);

	const [gastos, setGastos] = useState([]);

	const [
		mostrarPregunta,
		setMostrarPregunta,
	] = useState(true);

	const [gasto, setGasto] = useState({});
	const [crearGasto, setCrearGasto] = useState(
		false
	);

	useEffect(() => {
		if (crearGasto) {
			setGastos([...gastos, gasto]);
			const presupuestoRestante =
				restante - gasto.cantidad;
			setRestante(presupuestoRestante);
			setCrearGasto(false);
		}
	}, [gasto, setCrearGasto, gastos, restante]);

	return (
		<div className="container">
			<header>
				<h1>Gasto Semanal</h1>
				<div className="contenido-principal contenido">
					{mostrarPregunta && (
						<Pregunta
							setPresupuesto={setPresupuesto}
							setRestante={setRestante}
							setMostrarPregunta={
								setMostrarPregunta
							}
						/>
					)}

					<div className="row">
						<div className="one-half column">
							<Formulario
								setGasto={setGasto}
								setCrearGasto={setCrearGasto}
							/>
						</div>
						<div className="one-half column">
							<Listado gastos={gastos} />
							<ControlPresupuesto
								presupuesto={presupuesto}
								restante={restante}
							/>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}

export default App;
