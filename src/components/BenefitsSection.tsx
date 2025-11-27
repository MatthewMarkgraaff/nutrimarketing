'use client';

import Image from 'next/image';
import { useState } from 'react';

const CheckIcon = () => (
  <div className="w-6 h-6 relative">
    <Image
      src="/images/check-icon.svg"
      alt="Check"
      fill
      className="object-contain"
    />
  </div>
);

const CloseIcon = () => (
  <div className="w-6 h-6 relative">
    <Image
      src="/images/close-icon.svg"
      alt="Close"
      fill
      className="object-contain"
    />
  </div>
);

const benefits = [
  {
    icon: "/images/target-icon-black.svg",
    text: "Optimized, personalized, science-based, event-specific fueling strategy",
    withUs: true,
    withoutUs: false
  },
  {
    icon: "/images/ai-icon-black.svg", 
    text: "Smart recommendations from our multi-brand store",
    withUs: true,
    withoutUs: false
  },
  {
    icon: "/images/flag-icon-black.svg",
    text: "Fueling plans that evolves with your training and goals",
    withUs: true,
    withoutUs: false
  },
  {
    icon: "/images/science-icon-black.svg",
    text: "Scientific and personalized adaptation of your nutrition based on feedback",
    withUs: true,
    withoutUs: false
  },
  {
    icon: "/images/water-bottle-icon-black.svg",
    text: "Proven, tested products timed to your needs",
    withUs: true,
    withoutUs: false
  },
  {
    icon: "/images/buy-icon-black.svg",
    text: "Always buy the right products for your needs",
    withUs: true,
    withoutUs: false
  },
  {
    icon: "/images/radar-icon-black.svg",
    text: "Automated tracking on your nutrition journey",
    withUs: true,
    withoutUs: false
  }
];

export default function BenefitsSection() {
  const [showWithUs, setShowWithUs] = useState(true);

  return (
    <div className="bg-[#f6f8fa] flex flex-col gap-12 md:gap-12 items-center justify-center px-4 md:px-[72px] py-12 md:py-16 w-full relative">
      <div className="flex flex-col font-montserrat font-bold items-start justify-center w-full max-w-[520px] text-left">
        <p className="text-[#ec4b2d] text-[13px] uppercase leading-[19.5px] w-full">
          How we can help you
        </p>
        <div className="flex flex-col justify-center text-[34px] text-[#161816] tracking-[-1.7px] leading-normal w-full">
          <p>Benefits when joining us</p>
        </div>
      </div>

      <div className="absolute h-[424.605px] right-0 top-[-38px] w-[636.001px] hidden xl:block overflow-hidden">
        <Image
          src="/images/comparison-bg.png"
          alt="Comparison Background"
          fill
          className="object-cover object-left"
        />
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden flex flex-col gap-2 items-center w-full max-w-[375px]">
        <div className="bg-[#e7e9e9] flex gap-[2px] items-center p-[2px] rounded-[10px] w-full">
          <button 
            onClick={() => setShowWithUs(true)}
            className={`flex-1 flex items-center justify-center p-2 rounded-lg transition-all ${
              showWithUs 
                ? 'bg-white shadow-[0px_36px_80px_0px_rgba(0,0,0,0.04),0px_15.04px_33.422px_0px_rgba(0,0,0,0.03),0px_8.041px_17.869px_0px_rgba(0,0,0,0.02),0px_4.508px_10.017px_0px_rgba(0,0,0,0.02),0px_2.394px_5.32px_0px_rgba(0,0,0,0.02),0px_0.996px_2.214px_0px_rgba(0,0,0,0.01)]' 
                : ''
            }`}
          >
            <p className="font-inter font-normal text-[17px] text-black text-center tracking-[-0.85px] leading-normal">
              With us
            </p>
          </button>
          <button 
            onClick={() => setShowWithUs(false)}
            className={`flex-1 flex items-center justify-center p-2 rounded-lg transition-all ${
              !showWithUs 
                ? 'bg-white shadow-[0px_36px_80px_0px_rgba(0,0,0,0.04),0px_15.04px_33.422px_0px_rgba(0,0,0,0.03),0px_8.041px_17.869px_0px_rgba(0,0,0,0.02),0px_4.508px_10.017px_0px_rgba(0,0,0,0.02),0px_2.394px_5.32px_0px_rgba(0,0,0,0.02),0px_0.996px_2.214px_0px_rgba(0,0,0,0.01)]' 
                : ''
            }`}
          >
            <p className="font-inter font-normal text-[17px] text-black text-center tracking-[-0.85px] leading-normal">
              Without us
            </p>
          </button>
        </div>
      </div>

      <div className="bg-white border-b border-gray-100 rounded-2xl w-full relative overflow-hidden">
        {/* Desktop Header Row */}
        <div className="hidden md:grid grid-cols-3 border-b border-gray-200">
          <div className="bg-[#f6f8fa] flex gap-2 items-center px-6 py-2">
            <p className="font-montserrat font-bold text-[17px] text-black tracking-[-0.85px] leading-normal">
              Benefits
            </p>
          </div>
          <div className="flex items-center justify-center px-6 py-2">
            <p className="font-montserrat font-bold text-[17px] text-black tracking-[-0.85px] leading-normal">
              With us
            </p>
          </div>
          <div className="flex items-center justify-center px-6 py-2">
            <p className="font-montserrat font-bold text-[17px] text-black tracking-[-0.85px] leading-normal">
              Without us
            </p>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden bg-[#f6f8fa] flex gap-2 items-center px-6 py-2 h-[80px]">
          <p className="font-montserrat font-bold text-[17px] text-black tracking-[-0.85px] leading-normal">
            Benefits
          </p>
        </div>

        {/* Benefits Rows */}
        {benefits.map((benefit, index) => (
          <div key={index} className={`grid grid-cols-2 md:grid-cols-3 min-h-[96px] ${index % 2 === 1 ? 'bg-[#f6f8fa]' : ''}`}>
            <div className="flex gap-3 items-center px-2 py-6 md:p-6 overflow-hidden">
              <div className="w-6 h-6 relative flex-shrink-0">
                <Image
                  src={benefit.icon}
                  alt="Benefit Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="flex-1 font-inter font-semibold text-[15px] md:text-[17px] text-[#737473] tracking-[-0.75px] md:tracking-[-0.85px] leading-normal break-words">
                {benefit.text}
              </p>
            </div>
            <div className="flex items-center justify-center p-6">
              {showWithUs ? 
                (benefit.withUs ? <CheckIcon /> : <CloseIcon />) : 
                (benefit.withoutUs ? <CheckIcon /> : <CloseIcon />)
              }
            </div>
            <div className="hidden md:flex items-center justify-center p-6">
              {benefit.withoutUs ? <CheckIcon /> : <CloseIcon />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
