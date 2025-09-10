import React from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/outline';

const OfferBanner = () => {
  return (
    <div className="bg-pink-500 text-white px-6 py-8 rounded-2xl shadow-lg backdrop-blur-md border border-pink-300 max-w-5xl mx-auto my-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-3xl font-bold flex items-center gap-2 justify-center md:justify-start">
            <CheckBadgeIcon className="w-7 h-7 text-white" />
            Get Verified Today!
          </h2>
          <p className="text-sm text-pink-100">
            Whether you're a skilled Fundi or a recruiter, join FundiFind and get verified for just <span className="font-semibold text-white">KSh 500</span>. Build trust, get hired faster, and unlock premium features.
          </p>
        </div>
        <div className="text-center md:text-right">
          <div className="text-lg line-through text-pink-200">KSh 1,000</div>
          <div className="text-4xl font-bold">KSh 500</div>
          <span className="text-sm text-pink-100">Offer valid until Sept 30</span>
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
