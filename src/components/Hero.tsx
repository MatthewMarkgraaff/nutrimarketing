import Image from 'next/image';

export default function Hero() {
  return (
    <div className="flex flex-col gap-2 items-start pb-12 md:pb-12 pt-8 md:pt-12 px-6 md:px-[72px] w-full relative bg-white">
      {/* Topographic Background */}
      <div className="absolute bottom-[24%] left-[43%] right-0 top-0 hidden lg:block">
        <div className="absolute inset-0">
          <Image
            src="/images/topographic-bg.svg"
            alt="Topographic Background"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Hero Image Container */}
      <div className="aspect-[3/4] md:aspect-[1376/768] relative rounded-[48px] md:rounded-[96px] w-full flex items-end justify-center md:justify-start">
        <div className="absolute inset-0 rounded-[48px] md:rounded-[96px] overflow-hidden">
          <Image
            src="/images/hero-new.jpg"
            alt="Hero Background"
            fill
            className="object-cover rounded-[48px] md:rounded-[96px]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.7)] rounded-[48px] md:rounded-[96px]" />
        </div>
        
        {/* Text Container - Flex positioned */}
        <div className="relative z-10 flex flex-col gap-4 md:gap-[16px] items-center md:items-start text-white p-6 md:p-0 md:ml-[120px] md:mb-[120px] max-w-[calc(100%-2rem)] md:max-w-[450px]">
          <div className="flex flex-col font-montserrat font-bold text-[28px] md:text-[56px] tracking-[-1.4px] md:tracking-[-2.8px] leading-normal text-center md:text-left">
            <p className="mb-0">Fuel Smarter.</p>
            <p>Go Farther</p>
          </div>
          
          <div className="flex flex-col font-inter font-normal text-[17px] md:text-[18px] tracking-[-0.85px] md:tracking-[-0.9px] leading-normal text-center md:text-left">
            <p>Personalized fueling strategies, backed by science, built for performance.</p>
          </div>

          {/* Mobile App Store Badges */}
          <div className="flex flex-col gap-3 items-center md:hidden">
            <div className="flex flex-col font-montserrat font-bold text-[15px] text-center text-white tracking-[-0.75px] leading-normal">
              <p>Download our beta</p>
            </div>
            <div className="flex gap-3 items-center justify-center">
              <div className="h-8 w-[95px] relative overflow-hidden">
                <Image
                  src="/appstore.svg"
                  alt="Download on the App Store"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="h-8 w-[107px] relative">
                <Image
                  src="/gplay.svg"
                  alt="Get it on Google Play"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
