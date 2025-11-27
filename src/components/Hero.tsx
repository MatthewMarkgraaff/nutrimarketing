import Image from 'next/image';

export default function Hero() {
  return (
    <div className="flex flex-col gap-2 items-start pb-8 md:pb-12 pt-16 md:pt-24 px-4 md:px-[72px] w-full relative">
      <div className="h-[400px] md:h-[480px] relative rounded-[24px] md:rounded-[44px] w-full">
        <div className="absolute inset-0 rounded-[24px] md:rounded-[44px] overflow-hidden">
          <Image
            src="/images/Hero Image.png"
            alt="Hero Background"
            fill
            className="object-cover rounded-[24px] md:rounded-[44px]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.468)] via-[48.9%] to-[rgba(0,0,0,0.7)] to-[97.8%] rounded-[24px] md:rounded-[44px]" />
        </div>
      </div>
      
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 translate-y-[12px] md:translate-y-[24px] flex flex-col gap-4 md:gap-[26px] items-center w-full px-4">
        <div className="flex flex-col font-montserrat font-bold text-[32px] md:text-[64px] text-center text-white tracking-[-1.6px] md:tracking-[-3.2px] max-w-full md:max-w-[900px] leading-normal">
          <p className="whitespace-pre-wrap">Fuel Smarter. Go Further</p>
        </div>
        
        <div className="flex flex-col font-inter font-normal text-[16px] md:text-[20px] text-center text-white tracking-[-0.8px] md:tracking-[-1px] max-w-full md:w-[766.728px] leading-normal">
          <p className="whitespace-pre-wrap">Personalized fueling strategies, backed by science, built for performance.</p>
        </div>
        
        <div className="flex flex-col gap-3 md:gap-4 items-center">
          <p className="font-montserrat font-bold italic text-[20px] md:text-[32px] text-white text-center max-w-full md:w-[541.188px] whitespace-pre-wrap leading-normal">
            Download our beta
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center">
            <div className="h-10 w-[119.664px] relative overflow-hidden">
              <Image
                src="/images/app-store-badge-hero.png"
                alt="Download on the App Store"
                fill
                className="object-contain"
              />
            </div>
            
            <div className="h-10 w-[134.872px] relative">
              <Image
                src="/images/google-play-badge-hero.png"
                alt="Get it on Google Play"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}