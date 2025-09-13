import React, { useState } from 'react';
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid';

function Notifications() {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "You received a new booking request.", read: false, time: "2 hours ago" },
    { id: 2, message: "Your profile was viewed 10 times today.", read: false, time: "Today" },
    { id: 3, message: "Payment for last job has been processed.", read: true, time: "Yesterday" },
  ]);

  const markAllAsRead = () => {
    const updated = notifications.map(n => ({ ...n, read: true }));
    setNotifications(updated);
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-pink-600">Notifications</h2>
        <button
          onClick={markAllAsRead}
          className="text-sm text-pink-500 hover:text-pink-600"
        >
          Mark All as Read
        </button>
      </div>

      <ul className="space-y-4">
        {notifications.map((note) => (
          <li
            key={note.id}
            className={`flex items-start gap-3 p-4 rounded border ${
              note.read ? 'bg-gray-50 border-gray-200' : 'bg-pink-50 border-pink-200'
            }`}
          >
            {note.read ? (
              <CheckCircleIcon className="w-5 h-5 text-green-500 mt-1" />
            ) : (
              <ExclamationCircleIcon className="w-5 h-5 text-pink-500 mt-1" />
            )}
            <div>
              <p className="text-gray-800">{note.message}</p>
              <span className="text-xs text-gray-500">{note.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Notifications;
