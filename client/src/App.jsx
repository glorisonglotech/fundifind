import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import { useRegisterSW } from 'virtual:pwa-register/react';

import { UserProvider } from '@/context/UserContext'; 
import Index from './pages/Index';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import FundiDashboard from './pages/dashboard/fundi/FundiDashboard';
import RecruiterDashboard from './pages/dashboard/recruiter/RecruiterDashboard';


function App() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useRegisterSW({
    onNeedRefresh() {
      console.log('New content available');
    },
    onOfflineReady() {
      console.log('App is ready offline');
    },
  });

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);

      toast.info('Install FundiFind app for faster access', {
        action: {
          label: 'Install',
          onClick: () => {
            e.prompt();
          },
        },
      });
    });
  }, []);

  return (
    <UserProvider>
      <Toaster richColors position="top-center" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/fundidashboard" element={<FundiDashboard />} />
          <Route path="/recruiterdashboard" element={<RecruiterDashboard />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
