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
import PublicLayout from './components/Layout/PublicLayout';
import Layout from './components/Layout/Layout'; // Asegúrate de importar esto

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas con footer */}
        <Route path="/" element={<PublicLayout><Login /></PublicLayout>} />
        <Route path="/register" element={<PublicLayout><Register /></PublicLayout>} />

        {/* Rutas protegidas con header y footer */}
        <Route path="/menu" element={<ProtectedRoute><Layout><MainMenu /></Layout></ProtectedRoute>} />
        <Route path="/sensores" element={<ProtectedRoute><Layout><SensorSummary /></Layout></ProtectedRoute>} />
        <Route path="/vigilancia" element={<ProtectedRoute><Layout><SurveillanceSystem /></Layout></ProtectedRoute>} />
        <Route path="/regadio" element={<ProtectedRoute><Layout><IrrigationSystem /></Layout></ProtectedRoute>} />
        <Route path="/automatizacion" element={<ProtectedRoute><Layout><IrrigationAutomationForm /></Layout></ProtectedRoute>} />
        <Route path="/meteorologia" element={<ProtectedRoute><Layout><WeatherModule /></Layout></ProtectedRoute>} />
        <Route path="/registro-meteorologico" element={<ProtectedRoute><Layout><WeatherLog /></Layout></ProtectedRoute>} />
        <Route path="/detalle-horas" element={<ProtectedRoute><Layout><HourlyDetail /></Layout></ProtectedRoute>} />
        <Route path="/notificaciones" element={<ProtectedRoute><Layout><NotificationSettings /></Layout></ProtectedRoute>} />
        <Route path="/nueva-notificacion" element={<ProtectedRoute><Layout><NotificationForm /></Layout></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute><Layout><AdminSettings /></Layout></ProtectedRoute>} />
        <Route path="/admin/enviar-correo" element={<ProtectedRoute><Layout><EmailSender /></Layout></ProtectedRoute>} />
        <Route path="/admin/usuarios" element={<ProtectedRoute><Layout><UserManagement /></Layout></ProtectedRoute>} />
        <Route path="/admin/historial-usuarios" element={<ProtectedRoute><Layout><UserActionHistory /></Layout></ProtectedRoute>} />
        <Route path="/admin/reset-clave-maestra" element={<ProtectedRoute><ResetMasterPassword /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
