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
import ProtectedRoute from './components/Security/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-clave-maestra" element={<ResetMasterPassword />} />

        {/* Rutas protegidas */}
        <Route path="/menu" element={<ProtectedRoute><MainMenu /></ProtectedRoute>} />
        <Route path="/sensores" element={<ProtectedRoute><SensorSummary /></ProtectedRoute>} />
        <Route path="/vigilancia" element={<ProtectedRoute><SurveillanceSystem /></ProtectedRoute>} />
        <Route path="/regadio" element={<ProtectedRoute><IrrigationSystem /></ProtectedRoute>} />
        <Route path="/automatizacion" element={<ProtectedRoute><IrrigationAutomationForm /></ProtectedRoute>} />
        <Route path="/meteorologia" element={<ProtectedRoute><WeatherModule /></ProtectedRoute>} />
        <Route path="/registro-meteorologico" element={<ProtectedRoute><WeatherLog /></ProtectedRoute>} />
        <Route path="/detalle-horas" element={<ProtectedRoute><HourlyDetail /></ProtectedRoute>} />
        <Route path="/notificaciones" element={<ProtectedRoute><NotificationSettings /></ProtectedRoute>} />
        <Route path="/nueva-notificacion" element={<ProtectedRoute><NotificationForm /></ProtectedRoute>} />
        <Route path="/config-admin" element={<ProtectedRoute><AdminSettings /></ProtectedRoute>} />
        <Route path="/enviar-correo" element={<ProtectedRoute><EmailSender /></ProtectedRoute>} />
        <Route path="/usuarios" element={<ProtectedRoute><UserManagement /></ProtectedRoute>} />
        <Route path="/historial-usuarios" element={<ProtectedRoute><UserActionHistory /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;