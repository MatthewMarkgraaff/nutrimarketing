import Image from 'next/image';

const TimelineItem = ({ time, product, brand, price, flavor, type, carbs, sodium, protein, caffeine, productImage }: {
  time: string;
  product: string;
  brand: string;
  price: string;
  flavor: string;
  type: string;
  carbs: string;
  sodium: string;
  protein: string;
  caffeine: string;
  productImage: string;
}) => (
  <div className="flex gap-2 items-start px-4 w-full">
    <div className="flex flex-col items-center pb-2 w-[41px]">
      <div className="flex flex-col gap-1 items-center justify-center px-0 py-1 rounded-lg w-full">
        <div className="w-4 h-4 relative overflow-hidden">
          <Image
            src="/images/clock-icon.svg"
            alt="Clock"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <p className="font-inter font-normal text-[12px] text-[#0d0e0d] text-center tracking-[-0.6px] uppercase leading-normal">
            {time}
          </p>
        </div>
      </div>
      <div className="flex flex-1 gap-[10px] items-start justify-center w-full min-h-px">
        <div className="flex h-full items-center justify-center w-0">
          <div className="h-full rotate-90">
            <div className="h-full w-[60px] relative">
              <Image
                src="/images/separator-line.svg"
                alt="Separator"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-[#f6f8fa] border border-[#e7e9e9] flex flex-1 gap-2 items-start p-4 rounded-2xl min-h-px">
      <div className="flex flex-1 flex-col gap-2 items-start justify-center min-h-px">
        <div className="flex gap-2 items-center w-full">
          <div className="w-[52px] h-[52px] relative rounded-lg overflow-hidden">
            <Image
              src={productImage}
              alt={product}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col items-start justify-center min-h-px">
            <p className="font-montserrat font-bold text-[13px] text-[#a2a3a2] tracking-[-0.65px] uppercase leading-normal w-full">
              {brand}
            </p>
            <div className="flex flex-col h-[36px] justify-center overflow-hidden text-[15px] text-[#161816] tracking-[-0.75px] w-full font-inter font-normal leading-normal">
              <p className="overflow-ellipsis overflow-hidden whitespace-nowrap">{product}</p>
            </div>
          </div>
          <p className="font-montserrat font-bold text-[17px] text-[#161816] text-right tracking-[-0.85px] w-[58px] leading-normal">
            {price}
          </p>
        </div>
        
        <div className="flex flex-col gap-2 items-start w-full">
          <div className="flex items-start w-full">
            <div className="border-r border-[#e7e9e9] flex gap-2 items-center justify-center p-1">
              <div className="flex flex-col font-inter font-normal justify-center text-[12px] text-[#161816] text-center tracking-[-0.6px] leading-normal">
                <p>{flavor}</p>
              </div>
            </div>
            <div className="flex gap-2 items-center justify-center p-1">
              <div className="flex flex-col font-inter font-normal justify-center text-[12px] text-[#161816] text-center tracking-[-0.6px] leading-normal">
                <p>{type}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#e7e9e9] border border-[#d0d1d0] flex gap-1 items-center px-0 py-2 rounded-lg w-full">
            <div className="flex flex-1 flex-col font-inter font-normal gap-1 h-[34px] items-start px-1 py-[2px] text-[11px] text-[#161816] text-center tracking-[-0.55px] leading-normal">
              <div className="flex flex-col justify-center w-full">
                <p>Carbs</p>
              </div>
              <div className="flex flex-col justify-center w-full">
                <p>{carbs}</p>
              </div>
            </div>
            <div className="flex flex-1 flex-col font-inter font-normal gap-1 h-[34px] items-start px-1 py-[2px] text-[11px] text-[#161816] text-center tracking-[-0.55px] leading-normal">
              <div className="flex flex-col justify-center w-full">
                <p>Sodium</p>
              </div>
              <div className="flex flex-col justify-center w-full">
                <p>{sodium}</p>
              </div>
            </div>
            <div className="flex flex-1 flex-col font-inter font-normal gap-1 h-[34px] items-start px-1 py-[2px] text-[11px] text-[#161816] text-center tracking-[-0.55px] leading-normal">
              <div className="flex flex-col justify-center w-full">
                <p>Protein</p>
              </div>
              <div className="flex flex-col justify-center w-full">
                <p>{protein}</p>
              </div>
            </div>
            <div className="flex flex-1 flex-col font-inter font-normal gap-1 h-[34px] items-start px-1 py-[2px] text-[11px] text-[#161816] text-center tracking-[-0.55px] leading-normal">
              <div className="flex flex-col justify-center w-full">
                <p>Caffeine</p>
              </div>
              <div className="flex flex-col justify-center w-full">
                <p>{caffeine}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description, className }: {
  icon: string;
  title: string;
  description: string;
  className?: string;
}) => (
  <div className={`bg-white border border-[#e7e9e9] flex flex-col gap-4 items-start p-6 rounded-lg lg:h-[240px] w-full`}>
    <div className="flex gap-2 items-center p-2 rounded-lg">
      <div className="w-8 h-8 relative">
        <Image
          src={icon}
          alt="Feature Icon"
          fill
          className="object-contain"
        />
      </div>
    </div>
    <div className="flex flex-col font-montserrat font-bold justify-center text-[18px] text-[#161816] tracking-[-0.9px] leading-normal min-w-full w-min">
      <div dangerouslySetInnerHTML={{ __html: title }} />
    </div>
    <div className="flex flex-col font-inter font-normal justify-center text-[14px] text-[#737473] tracking-[-0.7px] leading-normal flex-1">
      <p>{description}</p>
    </div>
  </div>
);

export default function PlanSection() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center px-4 md:px-[78px] py-8 md:py-24 w-full relative lg:-mt-16 bg-[#f6f8fa]">
      <div className="hidden lg:flex flex-col items-start rounded-[24px] w-full lg:max-w-[375px] lg:w-[375px] relative z-10">
        <div className="flex flex-col gap-4 h-[209px] items-start w-full">
          <div className="flex flex-col gap-2 items-start px-4 w-full">
            <p className="font-montserrat font-bold h-5 text-[16px] text-[#ec4b2d] tracking-[-0.8px] uppercase leading-normal w-[343px]">
              Before
            </p>
          </div>
          <TimelineItem
            time="1HR"
            product="Drink Mix 160"
            brand="Maurten"
            price="€2.49"
            flavor="Neutral"
            type="Drink"
            carbs="39G"
            sodium="200MG"
            protein="0G"
            caffeine="0G"
            productImage="/images/product-1.jpg"
          />
        </div>

        <div className="flex flex-col gap-4 h-[587px] items-start w-full">
          <div className="flex flex-col gap-2 items-start px-4 w-full">
            <p className="font-montserrat font-bold text-[16px] text-[#ec4b2d] tracking-[-0.8px] uppercase leading-normal w-[343px]">
              DURING
            </p>
          </div>
          <TimelineItem
            time="20MIN"
            product="Energy Gummy"
            brand="TA Energy"
            price="€2.00"
            flavor="Cola"
            type="Chew"
            carbs="23G"
            sodium="144MG"
            protein="0G"
            caffeine="0G"
            productImage="/images/product-2.jpg"
          />
          <TimelineItem
            time="40MIN"
            product="Gel 100"
            brand="Maurten"
            price="€3.69"
            flavor="Neutral"
            type="Gel"
            carbs="25G"
            sodium="20MG"
            protein="0G"
            caffeine="0G"
            productImage="/images/product-3.jpg"
          />
          <TimelineItem
            time="1HR"
            product="Energy Gummy Cassis"
            brand="TA Energy"
            price="€2.00"
            flavor="Blackcurrent"
            type="Chew"
            carbs="23G"
            sodium="144MG"
            protein="0G"
            caffeine="0G"
            productImage="/images/product-4.jpg"
          />
        </div>
      </div>

      <div className="absolute h-[628px] left-[50%] top-[-80px] w-[621px] hidden lg:block transform -translate-x-1/2 z-0">
        <div className="absolute bottom-0 h-[628px] right-[-320px] w-[942px]">
          <Image
            src="/images/athlete-bg.jpg"
            alt="Athlete Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute flex h-[96.767px] items-center justify-center left-[52.88px] top-0 w-[151.451px]">
          <div className="rotate-180">
            <div className="bg-gradient-to-b from-transparent h-[96.767px] to-[#f6f8fa] w-[151.451px]" />
          </div>
        </div>
        <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(254,254,254,0.3)] h-[98.74px] left-[52.88px] to-[#fdfdfd] w-[151.451px]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full lg:max-w-[520px] lg:w-[520px] relative z-10">
        <FeatureCard
          icon="/images/heartbeat-icon.svg"
          title="Athlete progress <br/>tracking"
          description="Track your progress with in-app history and feedback. Simple, continual improvement."
        />
        <FeatureCard
          icon="/images/doc-icon.svg"
          title="Editable<br/>and adaptive plans"
          description="Updates based on experience and training feedback."
        />
        <FeatureCard
          icon="/images/fitness-icon.svg"
          title="Training <br/>&amp; race mode"
          description="Plans adjust by intensity, duration, weather, and elevation. Precise fueling for every condition."
        />
        <FeatureCard
          icon="/images/bottle-icon.svg"
          title="Real product recommendations"
          description="Choose from top brands in our multi-brand store. It's easy to buy what you need — all in one place."
        />
      </div>
    </div>
  );
}
