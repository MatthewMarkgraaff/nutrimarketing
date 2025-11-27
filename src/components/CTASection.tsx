import Image from 'next/image';

export default function CTASection() {
  return (
    <div className="bg-white flex flex-col gap-8 md:gap-12 items-start px-4 md:px-[29.5px] py-12 md:py-16 w-full">
      <div className="flex flex-col gap-4 md:gap-6 items-center w-full">
        <div className="w-full text-center">
          <p className="font-montserrat font-bold text-[#ec4b2d] text-[13px] uppercase leading-[19.5px]">
            Get started
          </p>
        </div>
        
        <div className="w-full text-center">
          <div className="flex flex-col font-montserrat font-bold justify-center text-[24px] md:text-[28px] text-[#161816] tracking-[-1.2px] md:tracking-[-1.4px] leading-normal">
            <p>Try out our beta app today!</p>
          </div>
        </div>
        
        <div className="flex flex-col gap-3 md:gap-4 items-center">
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center">
            <div className="h-10 w-[119.664px] relative overflow-hidden">
              <Image
                src="/images/app-store-badge.png"
                alt="Download on the App Store"
                fill
                className="object-contain"
              />
            </div>
            
            <div className="h-10 w-[134.872px] relative">
              <Image
                src="/images/google-play-badge.png"
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