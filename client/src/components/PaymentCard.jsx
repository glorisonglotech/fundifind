import React from "react";

const PaymentCard = ({ cost, fee = 100, phone, onChange, onPay }) => {
  const total = Number(cost || 0) + fee;

  return (
    <div className="bg-white border border-pink-200 rounded-lg p-6 shadow-md w-full mt-6">
      <h3 className="text-xl font-bold text-pink-600 mb-4">Payment</h3>
      <div className="space-y-2 mb-4">
        <p className="text-gray-700">Service Cost: <span className="font-semibold">KSh {cost || 0}</span></p>
        <p className="text-gray-700">Platform Fee: <span className="font-semibold">KSh {fee}</span></p>
        <p className="text-gray-800 font-bold">Total: KSh {total}</p>
      </div>
      <input
        type="tel"
        placeholder="M-Pesa Phone Number"
        value={phone}
        onChange={(e) => onChange("phone", e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 w-full mb-4"
      />
      <button
        onClick={onPay}
        className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 w-full"
      >
        Pay with M-Pesa
      </button>
    </div>
  );
};

export default PaymentCard;
