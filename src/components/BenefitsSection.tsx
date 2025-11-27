import Image from 'next/image';

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
    icon: "/images/target-icon.svg",
    text: "Optimized, personalized, science-based, event-specific fueling strategy",
    withUs: true,
    withoutUs: false
  },
  {
    icon: "/images/ai-icon.svg", 
    text: "Smart recommendations from our multi-brand store",
    withUs: true,
    withoutUs: false
  },
  {
    icon: "/images/flag-icon.svg",
    text: "Fueling plans that evolves with your training and goals",
    withUs: true,
    withoutUs: false
  },
  {
    icon: "/images/science-icon.svg",
    text: "Scientific and personalized adaptation of your nutrition based on feedback",
    withUs: true,
    withoutUs: false
  },
  {
    icon: "/images/water-bottle-icon.svg",
    text: "Proven, tested products timed to your needs",
    withUs: true,
    withoutUs: false
  },
  {
    icon: "/images/buy-icon.svg",
    text: "Always buy the right products for your needs",
    withUs: true,
    withoutUs: false
  },
  {
    icon: "/images/radar-icon.svg",
    text: "Automated tracking on your nutrition journey",
    withUs: true,
    withoutUs: false
  }
];

export default function BenefitsSection() {
  return (
    <div className="bg-[#f6f8fa] flex flex-col gap-8 md:gap-12 items-center justify-center px-4 md:px-[72px] py-12 md:py-16 w-full relative">
      <div className="flex flex-col font-montserrat font-bold items-start justify-center w-full text-center md:text-left">
        <p className="text-[#ec4b2d] text-[13px] uppercase leading-[19.5px] w-full">
          How we can help you
        </p>
        <div className="flex flex-col justify-center text-[24px] md:text-[28px] text-[#161816] tracking-[-1.2px] md:tracking-[-1.4px] leading-normal w-full">
          <p>Benefits when joining us</p>
        </div>
      </div>

      <div className="absolute h-[424.605px] right-0 top-[-38px] w-[636.001px] hidden xl:block overflow-hidden">
        <Image
          src="/images/comparison-bg.jpg"
          alt="Comparison Background"
          fill
          className="object-cover object-left"
        />
      </div>

      <div className="bg-white border-b border-gray-100 rounded-2xl w-full relative overflow-hidden">
        {/* Header Row */}
        <div className="grid grid-cols-3 border-b border-gray-200">
          <div className="bg-[#f6f8fa] flex gap-2 items-center px-2 md:px-6 py-2">
            <p className="font-montserrat font-bold text-[14px] md:text-[17px] text-black tracking-[-0.7px] md:tracking-[-0.85px] leading-normal">
              Benefits
            </p>
          </div>
          <div className="flex items-center justify-center px-2 md:px-6 py-2">
            <p className="font-montserrat font-bold text-[14px] md:text-[17px] text-black tracking-[-0.7px] md:tracking-[-0.85px] leading-normal">
              With us
            </p>
          </div>
          <div className="flex items-center justify-center px-2 md:px-6 py-2">
            <p className="font-montserrat font-bold text-[14px] md:text-[17px] text-black tracking-[-0.7px] md:tracking-[-0.85px] leading-normal">
              Without us
            </p>
          </div>
        </div>

        {/* Benefits Rows */}
        {benefits.map((benefit, index) => (
          <div key={index} className={`grid grid-cols-3 ${index % 2 === 0 ? '' : 'bg-[#f6f8fa]'}`}>
            <div className="flex gap-2 md:gap-3 items-center p-3 md:p-6">
              <div className="w-4 h-4 md:w-6 md:h-6 relative flex-shrink-0">
                <Image
                  src={benefit.icon}
                  alt="Benefit Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="flex-1 font-inter font-semibold text-[12px] md:text-[17px] text-[#737473] tracking-[-0.6px] md:tracking-[-0.85px] leading-normal">
                {benefit.text}
              </p>
            </div>
            <div className="flex items-center justify-center p-3 md:p-6">
              {benefit.withUs ? <CheckIcon /> : <CloseIcon />}
            </div>
            <div className="flex items-center justify-center p-3 md:p-6">
              {benefit.withoutUs ? <CheckIcon /> : <CloseIcon />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}