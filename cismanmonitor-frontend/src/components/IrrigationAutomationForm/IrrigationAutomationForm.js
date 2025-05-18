import React, { useState } from 'react';
import './IrrigationAutomationForm.css';

function IrrigationAutomationForm() {
  const [formData, setFormData] = useState({
    zona: '',
    humedadMinima: '',
    horaInicio: '',
    horaFin: '',
    dias: [],
    habilitado: false
  });

  const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'dias') {
      const nuevosDias = checked
        ? [...formData.dias, value]
        : formData.dias.filter((d) => d !== value);
      setFormData({ ...formData, dias: nuevosDias });
    } else if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario de automatización:', formData);
  };

  return (
    <div className="automation-form-container">
      <h2>Configuración de Automatización del Regadío</h2>
      <form onSubmit={handleSubmit} className="automation-form">
        <label>
          Zona:
          <input
            type="text"
            name="zona"
            value={formData.zona}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Humedad mínima (%):
          <input
            type="number"
            name="humedadMinima"
            value={formData.humedadMinima}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Hora de inicio:
          <input
            type="time"
            name="horaInicio"
            value={formData.horaInicio}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Hora de fin:
          <input
            type="time"
            name="horaFin"
            value={formData.horaFin}
            onChange={handleChange}
            required
          />
        </label>
        <fieldset>
          <legend>Días de riego:</legend>
          {diasSemana.map((dia) => (
            <label key={dia} className="checkbox-inline">
              <input
                type="checkbox"
                name="dias"
                value={dia}
                checked={formData.dias.includes(dia)}
                onChange={handleChange}
              />
              {dia}
            </label>
          ))}
        </fieldset>
        <label className="checkbox-block">
          <input
            type="checkbox"
            name="habilitado"
            checked={formData.habilitado}
            onChange={handleChange}
          />
          Automatización habilitada
        </label>
        <button type="submit">Guardar configuración</button>
      </form>
    </div>
  );
}

export default IrrigationAutomationForm;
