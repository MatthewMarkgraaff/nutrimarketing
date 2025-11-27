import Image from 'next/image';

export default function Hero() {
  return (
    <div className="flex flex-col gap-2 items-start pb-12 md:pb-12 pt-12 px-6 md:px-[72px] w-full relative bg-white">
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
      <div className="aspect-[4/3] md:aspect-[1376/768] relative rounded-[48px] md:rounded-[96px] w-full">
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
      </div>
      
      {/* Hero Text Container */}
      <div className="absolute bottom-12 md:bottom-[120px] left-8 md:left-[120px] flex flex-col gap-3 md:gap-[16px] items-start text-white max-w-[calc(100%-4rem)] md:max-w-[450px]">
        <div className="flex flex-col font-montserrat font-bold text-[20px] md:text-[56px] tracking-[-1px] md:tracking-[-2.8px] leading-normal">
          <p className="mb-0">Fuel Smarter.</p>
          <p>Go Farther</p>
        </div>
        
        <div className="flex flex-col font-montserrat font-medium text-[13px] md:text-[18px] tracking-[-0.5px] md:tracking-[-0.9px] leading-normal">
          <p>Personalized, training and course specific fueling strategies using real products. backed by science. Built for performance</p>
        </div>
      </div>
    </div>
  );
}
