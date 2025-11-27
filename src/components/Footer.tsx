import Image from 'next/image';

export default function Footer() {
  return (
    <div className="bg-[#161816] flex flex-col gap-6 md:gap-8 items-start pb-4 md:pb-6 pt-8 md:pt-10 px-4 md:px-[29.5px] w-full">
      {/* Logo */}
      <div className="flex gap-2 items-center justify-center w-full">
        <div className="h-4 w-[150px] md:h-6 md:w-[227.698px] relative">
          <Image
            src="/images/footer-logo.svg"
            alt="Nutri-Bay"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Newsletter Section - Hidden */}
      <div className="hidden border-t border-b border-[#737473] flex-col items-center justify-center px-4 md:px-[72px] py-4 md:py-6 w-full">
        <div className="flex flex-col gap-3 md:gap-5 items-center justify-center px-4 md:px-[22px] w-full">
          <p className="font-montserrat font-bold text-[16px] md:text-[20px] text-center text-white tracking-[-0.8px] md:tracking-[-1px] leading-normal">
            Stay Updated with Nutri-bay
          </p>
          <p className="font-inter font-normal text-[14px] md:text-[17px] text-white text-center tracking-[-0.7px] md:tracking-[-0.85px] leading-normal max-w-full md:w-[629px]">
            <span>Sign up to receive the latest promotions and specials from </span>Nutri-Bay.com
          </p>
          <div className="flex flex-col sm:flex-row gap-3 h-auto sm:h-[48.5px] w-full max-w-[448px] items-stretch sm:items-start">
            <div className="bg-[#f6f8fa] border border-[#e7e9e9] flex-1 h-[48.5px] rounded-lg min-h-px min-w-px">
              <div className="flex h-[48.5px] items-center px-4 py-3 w-full">
                <p className="font-inter font-normal text-[15px] text-[rgba(22,24,22,0.5)] leading-normal">
                  Enter your email
                </p>
              </div>
            </div>
            <div className="bg-[#ec4b2d] h-12 rounded-[64px] w-full sm:w-[116px]">
              <div className="flex gap-2 h-12 items-center justify-center px-6 py-3">
                <p className="font-inter font-medium text-[14px] text-center text-white leading-[20px]">
                  Subscribe
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
        {/* Stay in Touch */}
        <div className="flex flex-col gap-3 md:gap-4 items-start">
          <div className="w-full">
            <p className="font-montserrat font-bold text-[16px] md:text-[20px] text-white tracking-[-0.8px] md:tracking-[-1px] leading-normal">
              Stay in touch
            </p>
          </div>
          <div className="flex gap-3 items-start w-full">
            <div className="bg-[#121312] rounded-lg w-9 h-9">
              <div className="flex items-center justify-center w-9 h-9">
                <div className="w-5 h-5 relative">
                  <Image
                    src="/images/social-icon-1.svg"
                    alt="Social Media"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="bg-[#121312] rounded-lg w-9 h-9">
              <div className="flex items-center justify-center w-9 h-9">
                <div className="w-5 h-5 relative">
                  <Image
                    src="/images/social-icon-2.svg"
                    alt="Social Media"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="bg-[#121312] rounded-lg w-9 h-9">
              <div className="flex items-center justify-center w-9 h-9">
                <div className="w-5 h-5 relative">
                  <Image
                    src="/images/social-icon-3.svg"
                    alt="Social Media"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col gap-3 md:gap-4 items-start">
          <div className="w-full">
            <p className="font-montserrat font-bold text-[16px] md:text-[20px] text-white leading-normal">
              Contact Us
            </p>
          </div>
          <div className="flex flex-col gap-3 md:gap-4 items-start w-full">
            <div className="flex gap-3 items-center w-full">
              <div className="w-4 h-4 md:w-5 md:h-5 relative">
                <Image
                  src="/images/email-icon.svg"
                  alt="Email"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-inter font-normal text-[13px] md:text-[15px] text-[#737473] leading-[20px] md:leading-[22.5px]">
                contact@nutri-bay.com
              </p>
            </div>
            <div className="flex gap-3 items-center w-full">
              <div className="w-4 h-4 md:w-5 md:h-5 relative">
                <Image
                  src="/images/phone-icon.svg"
                  alt="Phone"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-inter font-normal text-[13px] md:text-[15px] text-[#737473] leading-[20px] md:leading-[22.5px]">
                +352 691 87 37 17
              </p>
            </div>
            <div className="flex gap-3 items-start w-full">
              <div className="w-4 h-4 md:w-5 md:h-5 relative">
                <Image
                  src="/images/location-icon.svg"
                  alt="Location"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="">
                <div className="font-inter font-normal text-[13px] md:text-[15px] text-[#737473] leading-[20px] md:leading-[22.5px]">
                  <p className="mb-0">15, rue de Grass</p>
                  <p>
                    L-8378 Kleinbettingen<br />
                    Luxembourg
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center md:items-start justify-between w-full">
        <div className="">
          <p className="font-inter font-normal text-[#737473] text-[11px] md:text-[13px] leading-[16px] md:leading-[19.5px] text-center md:text-left">
            © 2025 Nutri-Bay.com. All rights reserved.
          </p>
        </div>
        <div className="">
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center">
            <div className="">
              <p className="font-inter font-normal text-[#737473] text-[11px] md:text-[13px] leading-[16px] md:leading-[19.5px]">
                Privacy Policy
              </p>
            </div>
            <div className="">
              <p className="font-inter font-normal text-[#737473] text-[11px] md:text-[13px] leading-[16px] md:leading-[19.5px]">
                Terms of Service
              </p>
            </div>
            <div className="">
              <p className="font-inter font-normal text-[#737473] text-[11px] md:text-[13px] leading-[16px] md:leading-[19.5px]">
                Cookie Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}