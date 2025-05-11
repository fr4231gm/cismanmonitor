import React, { useState } from 'react';
import './IrrigationSystem.css';

function IrrigationSystem() {
	const usuario = 'Francisco';
	const estadoSistema = {
		riego: false,
		tiempo: 'Despejado',
		temperatura: '23°C',
		humedad: '27%',
	};

	const perfilesIniciales = [
		{
			id: 1,
			creador: 'Fran',
			nombre: 'Riego para verano',
			instrucciones: 'Activar riego si la temperatura supera 30°C y la humedad baja del 40%.',
		},
		{
			id: 2,
			creador: 'Pablo',
			nombre: 'Riego durante heladas',
			instrucciones: 'Activar si la temperatura es inferior a 0°C y hay helada detectada.',
		},
		{
			id: 3,
			creador: 'Eugenio',
			nombre: 'Riego para invierno',
			instrucciones: 'Riego programado a las 8:00 cada 2 días.',
		},
	];

	const [perfiles, setPerfiles] = useState(perfilesIniciales);
	const [perfilActivoId, setPerfilActivoId] = useState(1);
	const [riegoManual, setRiegoManual] = useState(false);

	const perfilActivo = perfiles.find(p => p.id === perfilActivoId);

	const toggleRiego = () => {
		setRiegoManual(!riegoManual);
	};

	const eliminarPerfil = (id) => {
		const confirmado = window.confirm('¿Seguro que deseas eliminar este perfil?');
		if (confirmado) {
			setPerfiles(perfiles.filter(p => p.id !== id));
			if (perfilActivoId === id && perfiles.length > 1) {
				setPerfilActivoId(perfiles.find(p => p.id !== id).id);
			}
		}
	};

	const activarPerfil = (id) => {
		setPerfilActivoId(id);
	};

	return (
		<div className="irrigation-wrapper">
			<div className="sensor-bar">
				<span>Accediendo como: <strong>{usuario}</strong></span>
				<span>Estado del riego: {riegoManual ? 'Activado (Manual)' : 'Desactivado'}</span>
				<span>Tiempo: {estadoSistema.tiempo}</span>
				<span>Temperatura actual: {estadoSistema.temperatura}</span>
				<span>Humedad relativa: {estadoSistema.humedad}</span>
			</div>

			<div className="irrigation-content">
				<div className="perfil-detalle-wrapper">
					<fieldset className="perfil-detalle">
						<legend>Detalles de perfil de riego actual</legend>
						<p><strong>Nombre:</strong> {perfilActivo.nombre}</p>
						<p><strong>Instrucciones de activación:</strong></p>
						<div className="instrucciones">{perfilActivo.instrucciones}</div>
					</fieldset>

					<div className="boton-riego">
						<button onClick={toggleRiego}>
							{riegoManual ? 'Desactivar riego manualmente' : 'Activar riego manualmente'}
						</button>
					</div>
				</div>

				<div className="perfiles-lista">
					<h3 className="tabla-titulo">Perfiles de riego existentes</h3>
					<table>
						<thead>
							<tr>
								<th>Creador</th>
								<th>Nombre</th>
								<th>Acciones</th>
							</tr>
						</thead>
						<tbody>
							{perfiles.map(perfil => (
								<tr key={perfil.id}>
									<td>{perfil.creador}</td>
									<td>{perfil.nombre}</td>
									<td className="acciones">
										<button title="Editar">✏️</button>
										<button title="Eliminar" onClick={() => eliminarPerfil(perfil.id)}>🗑️</button>
										<button title="Activar perfil" onClick={() => activarPerfil(perfil.id)}>✅</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<button className="crear-nuevo" onClick={() => alert('Crear nuevo perfil')}>Crear nuevo</button>
				</div>
			</div>

			<div className="irrigation-volver">
				<button onClick={() => alert('Volver al menú')}>← Volver al menú</button>
			</div>
		</div>
	);
}

export default IrrigationSystem;
