'use client';

import React from 'react';
import QRCode from 'react-qr-code';
import { User } from 'lucide-react';

type Props = {
  name: string;                 // e.g., "sivamani"
  phoneE164: string;            // E.164 format, e.g., "+917373288133"
  subtitle?: string;            // default: "WhatsApp contact"
};

export default function WhatsAppQRCard({
  name,
  phoneE164,
  subtitle = 'WhatsApp contact',
}: Props) {
  // WhatsApp deep link: opens chat and lets users save the contact
  // Remove '+' for wa.me format.
  const waLink = `https://wa.me/${phoneE164.replace('+', '')}`;

  return (
    <div className="w-full flex justify-center py-10">
      <div className="bg-[#25D366] w-full max-w-md rounded-[28px] p-6 sm:p-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 relative">
          {/* Avatar chip */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md">
            <div className="w-10 h-10 rounded-full bg-[#e9eef3] flex items-center justify-center">
              <User className="text-[#58667e]" size={20} />
            </div>
          </div>

          {/* Name + subtitle */}
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold text-[#111]">{name}</h3>
            <p className="text-sm text-[#616f86]">{subtitle}</p>
          </div>

          {/* QR */}
          <div className="mt-6 bg-white p-4 rounded-xl border border-[#eef2f6] flex justify-center">
            <div className="bg-white p-2 rounded-md">
              <QRCode
                value={waLink}
                size={220}
                style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                viewBox={`0 0 256 256`}
              />
            </div>
          </div>

          {/* Helper text */}
          <p className="mt-6 text-center text-sm text-[#616f86]">
            Scan this code using the WhatsApp camera to get my number
          </p>
        </div>
      </div>
    </div>
  );
}
