'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="bg-white border-b border-[#e7e9e9] flex items-center justify-center md:justify-between px-3 md:px-[50px] py-4 md:py-5 w-full">
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

      {/* App Store Badges */}
      <div className="hidden md:flex gap-3 md:gap-4 items-center">
        <Link href="https://testflight.apple.com/join/fTGJcDCN" target="_blank" rel="noopener noreferrer">
          <div className="h-[26px] w-[80px] md:h-[34px] md:w-[101px] relative overflow-hidden">
            <Image
              src="/appstore.svg"
              alt="Download on the App Store"
              fill
              className="object-contain"
            />
          </div>
        </Link>
        <Link href="https://play.google.com/store/apps/details?id=com.nutribay.mobile" target="_blank" rel="noopener noreferrer">
          <div className="h-[26px] w-[90px] md:h-[34px] md:w-[113px] relative">
            <Image
              src="/gplay.svg"
              alt="Get it on Google Play"
              fill
              className="object-contain"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}