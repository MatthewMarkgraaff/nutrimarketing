import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="flex flex-col gap-2 items-start pb-12 md:pb-12 pt-8 md:pt-[60px] px-6 md:px-[72px] w-full relative bg-white">
      {/* Hero Image Container */}
      <div className="aspect-[3/4] md:h-[580px] relative rounded-[48px] md:rounded-[44px] w-full flex items-end justify-center max-h-[600px] md:max-h-[580px]">
        <div className="absolute inset-0 rounded-[48px] md:rounded-[44px] overflow-hidden">
          <Image
            src="/images/hero-new.jpg"
            alt="Hero Background"
            fill
            className="object-cover rounded-[48px] md:rounded-[44px]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.468)] to-[rgba(0,0,0,0.7)] rounded-[48px] md:rounded-[44px]" />
        </div>
        
        {/* Text Container - Centered on desktop */}
        <div className="relative z-10 flex flex-col gap-4 md:gap-[26px] items-center text-white p-6 md:p-0 max-w-[calc(100%-2rem)] md:max-w-none md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
          <div className="font-montserrat font-bold text-[28px] md:text-[74px] tracking-[-1.4px] md:tracking-[-3.7px] leading-normal text-center">
            <p className="mb-0">Fuel Smarter. Go Further.</p>
          </div>
          
          <div className="flex flex-col font-inter font-normal text-[17px] md:text-[20px] tracking-[-0.85px] md:tracking-[-1px] leading-normal text-center">
            <p>Personalized fueling strategies, backed by science, built for performance.</p>
          </div>

          {/* App Store Badges */}
          <div className="flex flex-col gap-3 md:gap-4 items-center">
            <div className="flex flex-col font-montserrat font-bold italic text-[15px] md:text-[32px] text-center text-white tracking-[-0.75px] leading-normal">
              <p>Download our beta</p>
            </div>
            <div className="flex gap-3 md:gap-4 items-center justify-center">
              <Link href="https://testflight.apple.com/join/fTGJcDCN" target="_blank" rel="noopener noreferrer">
                <div className="h-8 md:h-10 w-[95px] md:w-[119.664px] relative overflow-hidden">
                  <Image
                    src="/appstore.svg"
                    alt="Download on the App Store"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.nutribay.mobile" target="_blank" rel="noopener noreferrer">
                <div className="h-8 md:h-10 w-[107px] md:w-[134.872px] relative">
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
        </div>
      </div>
    </div>
  );
}
