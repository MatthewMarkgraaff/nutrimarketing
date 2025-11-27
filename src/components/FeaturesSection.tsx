import Image from 'next/image';

export default function FeaturesSection() {
  return (
    <div className="bg-[#f6f8fa] flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center px-4 md:px-[72px] py-12 md:py-16 w-full">
      <div className="flex flex-col gap-8 lg:gap-12 items-start justify-center w-full lg:w-auto">
        <div className="flex flex-col gap-4 items-start">
          <div className="bg-[#0d0e0d] flex gap-2 items-center p-2 rounded-lg">
            <div className="w-8 h-8 md:w-10 md:h-10 relative">
              <Image
                src="/images/shaker-icon.svg"
                alt="Shaker Icon"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col font-montserrat font-bold text-[20px] md:text-[28px] text-[#161816] tracking-[-1px] md:tracking-[-1.4px] w-full max-w-[323px] leading-normal">
            <p className="whitespace-pre-wrap">Personalized nutrition plans</p>
          </div>
          <div className="flex flex-col font-inter font-normal text-[18px] md:text-[24px] text-[#737473] tracking-[-0.9px] md:tracking-[-1.2px] w-full max-w-[323px] leading-normal">
            <p className="whitespace-pre-wrap">Tailored specifically to your body, training sessions and course-specific requirements</p>
          </div>
        </div>
        
        <div className="flex flex-col gap-4 lg:gap-6 items-start">
          <div className="bg-[#0d0e0d] flex gap-2 items-center p-2 rounded-lg">
            <div className="w-8 h-8 md:w-10 md:h-10 relative">
              <Image
                src="/images/science-icon.svg"
                alt="Science Icon"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col font-montserrat font-bold text-[20px] md:text-[28px] text-[#161816] tracking-[-1px] md:tracking-[-1.4px] w-full leading-normal">
            <p className="whitespace-pre-wrap">Science based strategy builder</p>
          </div>
          <div className="flex flex-col font-inter font-normal text-[18px] md:text-[24px] text-[#737473] tracking-[-0.9px] md:tracking-[-1.2px] w-full max-w-[323px] leading-normal">
            <p className="whitespace-pre-wrap">Adapts based on your goals, performance, and feedback.</p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center relative w-full lg:w-auto">
        <div className="h-[300px] w-[400px] md:h-[400px] md:w-[500px] lg:h-[450px] lg:w-[580px] relative z-[3] mx-auto">
          <div className="absolute flex h-[65%] items-center justify-center left-0 top-[4%] w-[50%]">
            <div className="rotate-[-15deg]">
              <div className="h-[85%] w-[70%] relative overflow-hidden rounded-[12px] md:rounded-[20px]">
                <Image
                  src="/images/phone-1.jpg"
                  alt="Phone Screenshot 1"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="absolute flex h-[65%] items-center justify-center right-0 top-[4%] w-[50%]">
            <div className="rotate-[15deg]">
              <div className="h-[85%] w-[70%] relative overflow-hidden rounded-[12px] md:rounded-[20px]">
                <Image
                  src="/images/phone-2.jpg"
                  alt="Phone Screenshot 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="absolute h-full left-[29%] top-0 w-[42%] overflow-hidden rounded-[12px] md:rounded-[20px]">
            <Image
              src="/images/phone-3.jpg"
              alt="Phone Screenshot 3"
              fill
              className="object-cover"
            />
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
        
        <div className="absolute bg-gradient-to-r blur-[12px] md:blur-[22px] bottom-[-6%] filter from-[#d9d9d9] h-[5%] left-[33%] to-[#737373] w-[33%] z-[1] hidden lg:block" />
      </div>
    </div>
  );
}