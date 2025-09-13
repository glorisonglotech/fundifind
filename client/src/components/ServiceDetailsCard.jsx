import React from "react";

const ServiceDetailsCard = ({ description, date, time, amount, onChange }) => {
  return (
    <div className="bg-white border border-pink-200 rounded-lg p-6 shadow-md w-full">
      <h3 className="text-xl font-bold text-pink-600 mb-4">Service Details</h3>
      <textarea
        placeholder="Describe the service you need in detail"
        value={description}
        onChange={(e) => onChange("description", e.target.value)}
        className="w-full border border-gray-300 rounded px-4 py-2 mb-4 resize-none"
        rows={4}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <input
          type="date"
          value={date}
          onChange={(e) => onChange("date", e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full"
        />
        <input
          type="time"
          value={time}
          onChange={(e) => onChange("time", e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full"
        />
      </div>
      <input
        type="number"
        placeholder="Estimated Total Amount (KSh)"
        value={amount}
        onChange={(e) => onChange("amount", e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 w-full"
      />
    </div>
  );
};

export default ServiceDetailsCard;
