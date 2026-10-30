import { useSearchParams } from "react-router-dom";
import IMG_ONE from "../../assets/images/svg/time-img.svg";
import IMG_TWO from "../../assets/images/svg/location-img.svg";
import IMG_THREE from "../../assets/images/svg/wallet-img.svg";
import KITCHEN_BEFORE from "../../assets/images/png/kitchen-img-before.jpg";
import KITCHEN_AFTER from "../../assets/images/png/kitchen-img-after.jpg";
import { useState } from "react";
const Home = () => {
  const TAB_DATA = [ 
    {
      catgory: "Bathroom",
      heading: "Modern Bathroom Transformation",
      para: "A complete bathroom renovation transforming an outdated space into a stylish, modern retreat with elegant fixtures, contemporary tiles, premium vanities, and minimalist detailing.",
      ione: IMG_ONE,
      week: "8 Weeks",
      itwo: IMG_TWO,
      location: "Munich, Germany",
      ithree: IMG_THREE,
      number: "CHF 162’000",
    },

    {
      catgory: "Kitchen",
      heading: "Modern Kitchen Transformation",
      para: "A complete kitchen renovation transforming an unfinished interior into a bright, modern living space with custom cabinetry, integrated appliances, warm oak surfaces, and minimalist detailing.",
      ione: IMG_ONE,
      week: "8 Weeks",
      itwo: IMG_TWO,
      location: "Munich, Germany",
      ithree: IMG_THREE,
      number: "CHF 162’000",
    },

    {
      catgory: "Bedroom",
      heading: "Modern Bedroom Makeover",
      para: "Thoughtfully redesigned to create a cozy, elegant retreat with a contemporary bed, ambient lighting, custom wardrobes, warm textures, and refined minimalist detailing.",
      ione: IMG_ONE,
      week: "8 Weeks",
      itwo: IMG_TWO,
      location: "Munich, Germany",
      ithree: IMG_THREE,
      number: "CHF 162’000",
    },

    {
      catgory: "Terrace",
      heading: "Modern Terrace Transformation",
      para: "Designed as a stylish outdoor retreat, featuring elegant seating, lush greenery, ambient lighting, and contemporary finishes for the perfect blend of comfort and sophistication.",
      ione: IMG_ONE,
      week: "8 Weeks",
      itwo: IMG_TWO,
      location: "Munich, Germany",
      ithree: IMG_THREE,
      number: "CHF 162’000",
    },

    {
      catgory: "Living Room",
      heading: "Modern Living Room Makeover",
      para: "Reimagined with elegant furnishings, ambient lighting, a sophisticated color palette, and contemporary décor to create a warm, inviting space with timeless appeal and exceptional comfort throughout.",
      ione: IMG_ONE,
      week: "8 Weeks",
      itwo: IMG_TWO,
      location: "Munich, Germany",
      ithree: IMG_THREE,
      number: "CHF 162’000",
    },
  ];

  const [searchParam, setSearchParam] = useSearchParams();

  const categoryFromUrl = searchParam.get("category");

  const activeTab =
    TAB_DATA.find(
      (item) =>
        item.catgory.toLowerCase().replaceAll(" ", "-") === categoryFromUrl,
    )?.catgory || "Bathroom";

  const activeProject = TAB_DATA.find((item) => item.catgory === activeTab);

  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <>
      <section className=" min-h-screen flex items-center justify-center py-29.5">
        <div className="mx-auto px-5 max-w-330 w-full">
          <div className="flex items-center justify-center w-full flex-col gap-20 max-lg:gap-13 max-md:gap-10 max-sm:gap-7.5">
            <div className="flex items-end justify-between gap-6 w-full">
              <div>
                <p className="text-sm tracking-[10%] uppercase font-semibold text-lite-gray mb-2.5 leading-158">
                  Built Projects. Earned Trust.
                </p>

                <h2 className=" text-5xl text-dark-black max-w-162.5 w-full leading-130">
                  Construction & Renovation Projects Done the Right Way.
                </h2>
              </div>

              <div>
                <p className="max-w-129.75 mb-7 text-lg leading-162">
                  Explore completed construction and renovation projects
                  delivered with transparent planning and trusted execution.
                </p>

                <button className="flex text-dark-black border-dark-black border rounded-[50px] relative group overflow-hidden cursor-pointer py-3.5 px-6">
                  <span className="relative z-50 group-hover:text-dull-white text-lg text-dark-black leading-150">
                    View All Projects
                  </span>
                  <span className="bg-dark-black -translate-x-full rounded-[50px] absolute left-0 top-0 origin-bottom-left inset-0 transition-all duration-300 ease-in group-hover:translate-x-0 z-0 h-full w-full"></span>
                </button>
              </div>
            </div>

            <div className="w-full">
              <div className="flex flex-wrap items-center justify-center border-b-2 border-black/8  pb-2.5">
                {TAB_DATA.map((item) => (
                  <button
                    key={item.catgory}
                    onClick={() =>
                      setSearchParam({
                        category: item.catgory
                          .toLowerCase()
                          .replaceAll(" ", "-"),
                      })
                    }
                    className={`relative px-18.5 pb-3 min-w-[256px] text-base cursor-pointer transition-all duration-300
          ${
            activeTab === item.catgory
              ? "text-dark-black after:absolute after:-bottom-3 after:left-0 after:h-0.5  after:w-full after:bg-dark-black"
              : "text-dark-black"
          }`}
                  >
                    {item.catgory}
                  </button>
                ))}
              </div>

              
<div className="mt-12.5 flex items-center justify-between gap-10 max-lg:flex-col">
  
  <div className="w-full max-w-105">
    <h3 className="mb-3 text-3xl font-semibold text-black md:text-4xl">
      {activeProject.heading}
    </h3>

    <p className="mb-8 text-base leading-7 text-gray-600">
      {activeProject.para}
    </p>

    <div className="flex flex-wrap gap-x-5 gap-y-5.5">
      <div className="flex items-center gap-3">
        <img height={22} width={22}
          src={activeProject.ione}
          alt="TIMER_IMAGE"
          className=""
        />
        <p className="font-semibold text-black">
          {activeProject.week}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <img height={26} width={18}
          src={activeProject.itwo}
          alt="LOCATION_IMAGE"
          className=""
        />
        <p className="font-semibold text-black">
          {activeProject.location}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <img  height={22} width={24}
          src={activeProject.ithree}
          alt="WALLET_IMAGE"
          className=""
        />
        <p className="font-semibold text-black">
          {activeProject.number}
        </p>
      </div>
    </div>
  </div>
  

<div className="relative w-full max-w-160 overflow-hidden rounded-xl aspect-4/3">

  {/* After Image */}
  <img
    height={396}
    width={594}
    src={KITCHEN_AFTER}
    alt="AFTER_RENOVATION"
    className="absolute inset-0 h-full w-full object-cover"
    style={{
      clipPath: `inset(0 0 0 ${sliderPosition}%)`,
    }}
  />

  {/* Before Image */}
  <img
    height={396}
    width={594}
    src={KITCHEN_BEFORE}
    alt="BEFORE_RENOVATION"
    className="absolute inset-0 h-full w-full object-cover"
    style={{
      clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
    }}
  />

  {/* Before Label - Clipped with Slider */}
  <div
    className="absolute inset-0 z-20 pointer-events-none"
    style={{
      clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
    }}
  >
    <span className="absolute left-[25%] top-6 -translate-x-1/2 rounded-[51px] bg-white px-4 py-2 text-lg font-medium text-dark-black">
      Before
    </span>
  </div>

  {/* After Label - Clipped with Slider */}
  <div
    className="absolute inset-0 z-20 pointer-events-none"
    style={{
      clipPath: `inset(0 0 0 ${sliderPosition}%)`,
    }}
  >
    <span className="absolute left-[75%] top-6 -translate-x-1/2 rounded-[51px] bg-white px-4 py-2 text-lg font-medium text-dark-black">
      After
    </span>
  </div>

  {/* Slider Line */}
  <div
    className="pointer-events-none absolute bottom-0 top-0 z-30 w-1 -translate-x-1/2 bg-white"
    style={{
      left: `${sliderPosition}%`,
    }}
  >
    <div className="absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-dull-white">

      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.66667 7.58366L3.25 13.0003L8.66667 18.417"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#010101"
        />

        <path
          d="M17.3333 7.58366L22.75 13.0003L17.3333 18.417"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#010101"
        />
      </svg>

    </div>
  </div>

  {/* Range Input */}
  <input
    type="range"
    min="0"
    max="100"
    value={sliderPosition}
    onChange={(e) => setSliderPosition(Number(e.target.value))}
    aria-label="Compare before and after renovation"
    className="absolute inset-0 z-40 h-full w-full cursor-ew-resize opacity-0"
  />

</div>


</div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
