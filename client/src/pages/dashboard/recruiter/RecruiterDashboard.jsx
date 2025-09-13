import React, { useState } from 'react';
import Navbar from './Navbar';
import FindFundiSection from './FindFundiSection';
import Footer from '@/components/Footer';
import ProfileHeader from './ProfileHeader';
import Messages from './Messages';
import Notifications from './Notifications';
import BookingLayout from './BookingLayout';


function RecruiterDashboard() {
  const [activeSection, setActiveSection] = useState('profile');

  return (
    <>
      <Navbar onNavigate={setActiveSection} />
     
      {activeSection === 'profile' && <ProfileHeader />}
      {activeSection === 'findfundis' && <FindFundiSection />}
      {activeSection === 'messages' && <Messages />}
      {activeSection === 'bookings' && <BookingLayout />}
      {activeSection === 'notifications' && <Notifications />}

      <Footer />
    </>
  );
}

export default RecruiterDashboard;
