import Image from 'next/image';

export default function FeaturesSection() {
  return (
    <div className="bg-[#f6f8fa] flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-center px-4 md:px-[72px] py-16 md:py-24 w-full">
      <div className="flex flex-col gap-8 lg:gap-10 items-start justify-center w-full lg:w-auto lg:max-w-[400px]">
        <div className="flex flex-col gap-4 items-start">
          <div className="bg-[#0d0e0d] flex gap-2 items-center p-2 rounded-lg">
            <div className="w-6 h-6 md:w-8 md:h-8 relative">
              <Image
                src="/images/shaker-icon.svg"
                alt="Shaker Icon"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col font-montserrat font-bold text-[18px] md:text-[22px] text-[#161816] tracking-[-0.9px] md:tracking-[-1.1px] w-full leading-normal">
            <p className="whitespace-pre-wrap">Personalized nutrition plans</p>
          </div>
          <div className="flex flex-col font-inter font-normal text-[14px] md:text-[16px] text-[#737473] tracking-[-0.7px] md:tracking-[-0.8px] w-full leading-normal">
            <p className="whitespace-pre-wrap">Tailored specifically to your body, training sessions and course-specific requirements</p>
          </div>
        </div>
        
        <div className="flex flex-col gap-4 items-start">
          <div className="bg-[#0d0e0d] flex gap-2 items-center p-2 rounded-lg">
            <div className="w-6 h-6 md:w-8 md:h-8 relative">
              <Image
                src="/images/science-icon.svg"
                alt="Science Icon"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col font-montserrat font-bold text-[18px] md:text-[22px] text-[#161816] tracking-[-0.9px] md:tracking-[-1.1px] w-full leading-normal">
            <p className="whitespace-pre-wrap">Science based strategy builder</p>
          </div>
          <div className="flex flex-col font-inter font-normal text-[14px] md:text-[16px] text-[#737473] tracking-[-0.7px] md:tracking-[-0.8px] w-full leading-normal">
            <p className="whitespace-pre-wrap">Adapts based on your goals, performance, and feedback.</p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center relative w-full lg:w-auto">
        <div className="h-[450px] w-[380px] md:h-[550px] md:w-[480px] lg:h-[600px] lg:w-[520px] relative mx-auto">
          {/* Left phone - rotated left */}
          <div className="absolute h-[350px] w-[175px] md:h-[450px] md:w-[225px] lg:h-[500px] lg:w-[250px] left-0 top-[10%] z-[3]">
            <div className="rotate-[-12deg] h-full w-full">
              <div className="h-full w-full relative overflow-hidden rounded-[16px] md:rounded-[24px] ">
                <Image
                  src="/images/phone-1.jpg"
                  alt="Phone Screenshot 1"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Right phone - rotated right */}
          <div className="absolute h-[350px] w-[175px] md:h-[450px] md:w-[225px] lg:h-[500px] lg:w-[250px] right-0 top-[10%] z-[3]">
            <div className="rotate-[12deg] h-full w-full">
              <div className="h-full w-full relative overflow-hidden rounded-[16px] md:rounded-[24px] ">
                <Image
                  src="/images/phone-2.jpg"
                  alt="Phone Screenshot 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Center phone - straight */}
          <div className="absolute h-[380px] w-[190px] md:h-[480px] md:w-[240px] lg:h-[530px] lg:w-[265px] left-1/2 transform -translate-x-1/2 top-0 z-[4]">
            <div className="h-full w-full relative overflow-hidden rounded-[16px] md:rounded-[24px] ">
              <Image
                src="/images/phone-3.jpg"
                alt="Phone Screenshot 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute h-[20%] left-0 top-[-3%] w-full z-[2] hidden lg:block">
          <Image
            src="/images/product-info-container.svg"
            alt="Product Info"
            fill
            className="object-contain"
          />
        </div>
        
        <div className="absolute bg-gradient-to-r blur-[12px] md:blur-[20px] bottom-[8%] filter from-[#d9d9d9] h-[4%] left-[25%] to-[#737373] w-[50%] z-[1] hidden lg:block" />
      </div>
    </div>
  );
}