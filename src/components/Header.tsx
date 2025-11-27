'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="bg-white border-b border-[#e7e9e9] flex gap-3 md:gap-6 items-center justify-center px-4 md:px-[72px] py-3 md:py-4 w-full">
      <div className="flex gap-2 items-center">
        <div className="bg-[#161816] rounded-lg w-[40px] h-[40px] md:w-[60px] md:h-[60px] relative overflow-hidden">
          <Image
            src="/images/logo-icon.svg"
            alt="NutriBay Icon"
            fill
            className="object-cover"
          />
          <div className="absolute bg-[#040504] border border-[#0d0e0d] flex items-center justify-center right-0 top-[23px] md:top-[34px] px-[2px] rounded-[8px] md:rounded-[12px] translate-x-[-20px] md:translate-x-[-30px]">
            <span className="font-montserrat font-bold italic text-[6px] md:text-[8px] text-white leading-normal">
              Beta
            </span>
          </div>
        </div>
        <div className="h-4 w-[140px] md:h-6 md:w-[227.698px] relative">
          <Image
            src="/images/logo-text.svg"
            alt="NutriBay"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}