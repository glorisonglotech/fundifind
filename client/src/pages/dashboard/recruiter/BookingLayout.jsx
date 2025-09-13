import React, { useState } from "react";
import ServiceDetailsCard from "@/components/ServiceDetailsCard";
import PaymentCard from "@/components/PaymentCard";

const BookingLayout = () => {
  const [form, setForm] = useState({
    description: "",
    date: "",
    time: "",
    amount: "",
    phone: "",
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handlePayment = () => {
    console.log("Processing payment with:", form);
  };

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center sm:text-left">
        Book a Service
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Service Details spans 2 columns on large screens */}
        <div className="lg:col-span-2">
          <ServiceDetailsCard
            description={form.description}
            date={form.date}
            time={form.time}
            amount={form.amount}
            onChange={handleChange}
          />
        </div>

        {/* Payment Card */}
        <div>
          <PaymentCard
            cost={form.amount}
            phone={form.phone}
            onChange={handleChange}
            onPay={handlePayment}
          />
        </div>
      </div>
    </section>
  );
};

export default BookingLayout;
