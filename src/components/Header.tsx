'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="bg-white border-b border-[#e7e9e9] flex items-center justify-center px-3 md:px-[50px] py-4 md:py-5 w-full">
      {/* Logo Container */}
      <div className="flex gap-2 items-center">
        <div className="h-[17px] w-[60px] md:h-[22px] md:w-[80px] relative">
          <Image
            src="/images/nutribay-logo.svg"
            alt="NutriBay Logo"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col font-montserrat font-bold italic justify-center text-[13px] md:text-[17px] text-[#161816] text-center leading-[1.1]">
          <p>Nutri-bay</p>
        </div>
      </div>
    </div>
  );
}