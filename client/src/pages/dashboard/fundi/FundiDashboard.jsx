import React, { useState } from 'react';
import Navbar from './Navbar';
import ProfileHeader from './ProfileHeader';
import ProfileDetails from './ProfileDetails';
import Messages from './Messages'; 
import Notifications from './Notifications';
import Footer from '@/components/Footer';



function FundiDashboard() {
  const [activeSection, setActiveSection] = useState('profile');

  return (
    <>
      <Navbar onNavigate={setActiveSection} />
      <ProfileHeader />
      {activeSection === 'profile' && <ProfileDetails />}
      {activeSection === 'messages' && <Messages />}
      {activeSection === 'notifications' && <Notifications />}
      <Footer/>
    </>
  );
}

export default FundiDashboard;
