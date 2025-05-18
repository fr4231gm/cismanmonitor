import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import MainMenu from './components/MainMenu/MainMenu';
import SensorSummary from './components/SensorSummary/SensorSummary';
import SurveillanceSystem from './components/SurveillanceSystem/SurveillanceSystem';
import IrrigationSystem from './components/IrrigationSystem/IrrigationSystem';
import IrrigationAutomationForm from './components/IrrigationAutomationForm/IrrigationAutomationForm';
import WeatherModule from './components/WeatherModule/WeatherModule';
import WeatherLog from './components/WeatherLog/WeatherLog';
import HourlyDetail from './components/HourlyDetail/HourlyDetail';
import NotificationSettings from './components/NotificationSettings/NotificationSettings';
import NotificationForm from './components/NotificationForm/NotificationForm';
import AdminSettings from './components/AdminSettings/AdminSettings';
import EmailSender from './components/EmailSender/EmailSender';
import UserManagement from './components/UserManagement/UserManagement';
import UserActionHistory from './components/UserActionHistory/UserActionHistory';
import ResetMasterPassword from './components/ResetMasterPassword/ResetMasterPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<MainMenu />} />
        <Route path="/sensores" element={<SensorSummary />} />
        <Route path="/vigilancia" element={<SurveillanceSystem />} />
        <Route path="/regadio" element={<IrrigationSystem />} />
        <Route path="/automatizacion" element={<IrrigationAutomationForm />} />
        <Route path="/meteorologia" element={<WeatherModule />} />
        <Route path="/registro-meteorologico" element={<WeatherLog />} />
        <Route path="/detalle-horas" element={<HourlyDetail />} />
        <Route path="/notificaciones" element={<NotificationSettings />} />
        <Route path="/nueva-notificacion" element={<NotificationForm />} />
        <Route path="/config-admin" element={<AdminSettings />} />
        <Route path="/enviar-correo" element={<EmailSender />} />
        <Route path="/usuarios" element={<UserManagement />} />
        <Route path="/historial-usuarios" element={<UserActionHistory />} />
        <Route path="/reset-clave-maestra" element={<ResetMasterPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
