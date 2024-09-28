//Landing Page
import ButtonDefault from "@/components/Button";
import SliderHome from "@/components/SliderHome";
import TSImg from "@/components/TSImg";
import Image from "next/image";

export const metadata = {
  title: "Terra Segara",
  description: "Terra Segara website",
};

const ourWorks = [
  {
    image: "IMG_5465.png",
    title: "Beach Cleaning",
    date: "January 7, 2024",
  },
  {
    image: "IMG_5464.png",
    title: "Beach Cleaning",
    date: "January 7, 2024",
  },
  {
    image: "IMG_5460.JPG",
    title: "Beach Cleaning",
    date: "January 7, 2024",
  },
];

export default function LandingPage() {
  return (
    <>
      <div className="relative max-w-screen max-h-fit w-screen z-0">
        <Image
          src="/images/home-hero.png"
          width={1920} // Explicit width and height instead of fill
          height={1080}
          alt="hero home"
          className="transition-all object-cover w-screen"
        />
        <Image
          src="/Object-graphic6 1.png"
          width={180}
          height={180}
          className="absolute right-0 sm:top-2/3 sm:translate-y-10 top-1/3 translate-y-5 transition-all z-20 max-sm:scale-50 max-sm:translate-x-11 hidden"
        />
        <div className="absolute top-0 w-full h-full bg-gradient-to-t from-white to-transparent flex flex-col justify-center max-sm:px-10 px-20 z-10 gap-20">
          <p className="text-8xl max-sm:text-2xl font-normal">Be Part Of</p>
          <p className="text-8xl max-sm:text-2xl font-bold -mt-24 max-sm:translate-y-1">
            A Change.
          </p>
        </div>
      </div>

      <div className="w-full h-fit bg-white text-secondary sm:pt-16 pb-32">
        <h1 className="text-center text-2xl max-sm:text-xl">About Us</h1>
        <h1 className="text-center text-5xl max-sm:text-3xl font-bold mb-8 max-sm:mb-4">
          Welcome to Our Page
        </h1>
        <div className="flex gap-20 max-sm:gap-2 justify-center max-sm:mx-4">
          <div className="grid justify-center">
            <TSImg
              src={"1.png"}
              width={350}
              height={350}
              className="object-contain rounded-3xl max-sm:rounded-lg mb-3 mx-auto"
            />
            <ButtonDefault url={"/about-us"} text={"Who are we?"} variant={1} />
          </div>
          <div className="grid justify-center">
            <TSImg
              src={"3.png"}
              width={350}
              height={350}
              className="object-contain rounded-3xl max-sm:rounded-lg mb-3 mx-auto"
            />
            <ButtonDefault url={"/about-us"} text={"What we do?"} variant={1} />
          </div>
          <div className="grid justify-center">
            <TSImg
              src={"2.png"}
              width={350}
              height={350}
              className="object-contain rounded-3xl max-sm:rounded-lg mb-3 mx-auto"
            />
            <ButtonDefault
              url={"/about-us"}
              text={"How do we work?"}
              variant={1}
            />
          </div>
        </div>
      </div>
      <div className="w-screen h-[80vh] max-sm:h-[40vh] py-10 -translate-y-10 max-sm:py-0 max-sm:-translate-y-20 bg-gradient-to-b from-white via-secondary to-white grid grid-flow-col gap-5 max-sm:gap-2 justify-center items-center relative">
        <Image
          src={"/Object-graphic5 1.png"}
          width={250}
          height={500}
          className="absolute left-0 -bottom-24 hidden"
        />
        <div className="md:w-[1024px] md:h-[80vh] h-[200px] flex flex-row justify-between">
          <div
            className="w-[30%] h-full  rounded-3xl group flex flex-col justify-between relative hover:scale-105 transition-all"
            style={{
              backgroundImage: `url("https://terra-segara-asset.s3.ap-southeast-2.amazonaws.com/images/Vision.png")`,
              backgroundSize: "cover",
            }}
          >
            <div class="text-center text-7xl max-sm:text-xl font-bold relative top-5 max-sm:top-3 z-10">
              Vision
            </div>
            <p class="text-sm max-sm:text-[8px] px-6 max-sm:px-3 max-sm:leading-tight transition-all group-hover:text-secondary text-center mb-4 md:h-[150px] z-10">
              We envision a future where younger generations have abundant
              opportunities for improved livelihoods and a profound connection
              with nature.
            </p>
          </div>
          <div
            className="w-[30%] h-full rounded-3xl group flex flex-col justify-between relative hover:scale-105 transition-all"
            style={{
              backgroundImage: `url("https://terra-segara-asset.s3.ap-southeast-2.amazonaws.com/images/Mission.png")`,
              backgroundSize: "cover",
            }}
          >
            <div class="text-center text-7xl max-sm:text-xl font-bold relative top-5 max-sm:top-3 z-10">
              Mission
            </div>
            <p class="text-sm max-sm:text-[8px] px-6 max-sm:px-3 max-sm:leading-tight transition-all group-hover:text-secondary text-center mb-4 md:h-[150px] z-10">
              Our mission is to empower and guide the younger generation to
              become proactive participants in addressing climate change by
              fostering a deeper connection with nature.
            </p>
          </div>
          <div
            className="w-[30%] h-full rounded-3xl group flex flex-col justify-between relative hover:scale-105 transition-all"
            style={{
              backgroundImage: `url("https://terra-segara-asset.s3.ap-southeast-2.amazonaws.com/images/Value.png")`,
              backgroundSize: "cover",
            }}
          >
            <div class="text-center text-7xl max-sm:text-xl font-bold relative top-5 max-sm:top-3 z-10">
              Value
            </div>
            <p class="text-sm max-sm:text-[8px] px-6 max-sm:px-3 max-sm:leading-tight transition-all group-hover:text-secondary text-center mb-4 md:h-[150px] z-10">
              Our core values encompass continuous learning and adaptation,
              proactive action coupled with reflection, collaborative
              knowledge-building, and adept facilitation of transformative
              change.
            </p>
          </div>
        </div>
        {/* <div className="group w-80 max-sm:w-28 h-[100vh] max-sm:h-[30vh] rounded-[2.5rem] max-sm:rounded-xl drop-shadow-md hover:drop-shadow-2xl hover:scale-110 transition-all -z-0 mx-1">
          <TSImg
            src={'Vision.png'}
            fill
            className="h-full w-full object-cover object-center rounded-[40px] max-sm:rounded-xl"
          />
          <div className="w-full h-full -z-0 absolute rounded-[40px] max-sm:rounded-xl group-hover:bg-gradient-to-b from-secondary/70 to-50% transition-all"/>
          <div className="text-center text-7xl max-sm:text-xl font-bold relative top-5 max-sm:top-3">Vision</div>
          <div className="transition-all rounded-[2.5rem] max-sm:rounded-xl text-center relative top-[26rem] w-full h-full max-sm:top-32">
            <p className="text-sm max-sm:text-[8px] px-6 max-sm:px-3 max-sm:leading-tight transition-all group-hover:text-secondary text-center">We envision a future where younger generations have abundant opportunities for improved livelihoods and a profound connection with nature.</p>
          </div>
        </div>
        <div className="group w-80 max-sm:w-28 h-full max-sm:h-[30vh] rounded-[40px] max-sm:rounded-xl drop-shadow-md hover:drop-shadow-2xl hover:scale-110 transition-all -z-0 mx-1">
          <TSImg
            src={'Mission.png'}
            fill
            className="h-full w-full object-cover object-center rounded-[40px] max-sm:rounded-xl"
          />
          <div className="w-full h-full -z-0 absolute rounded-[40px] max-sm:rounded-xl group-hover:bg-gradient-to-b from-secondary/70 to-50% transition-all"/>
          <div className="text-center text-7xl max-sm:text-xl font-bold relative top-5 max-sm:top-3">Mission</div>
          <div className="transition-all rounded-[2.5rem] max-sm:rounded-xl text-center relative top-[26rem] w-full h-full max-sm:top-32">
            <p className="text-sm max-sm:text-[8px] px-6 max-sm:px-3 max-sm:leading-tight transition-all group-hover:text-secondary text-center">Our mission is to empower and guide the younger generation to become proactive participants in addressing climate change by fostering a deeper connection with nature.</p>
          </div>
        </div>
        <div className="group w-80 max-sm:w-28 h-full max-sm:h-[30vh] rounded-[40px] max-sm:rounded-xl drop-shadow-md hover:drop-shadow-2xl hover:scale-110 transition-all -z-0 mx-1">
          <TSImg
            src={'Value.png'}
            fill
            className="h-full w-full object-cover object-center rounded-[40px] max-sm:rounded-xl"
          />
          <div className="w-full h-full -z-0 absolute rounded-[40px] max-sm:rounded-xl group-hover:bg-gradient-to-b from-secondary/70 to-50% transition-all"/>
          <div className="text-center text-7xl max-sm:text-xl font-bold relative top-5 max-sm:top-3">Value</div>
          <div className="transition-all rounded-[2.5rem] max-sm:rounded-xl text-center relative top-[26rem] w-full h-full max-sm:top-32">
            <p className="text-sm max-sm:text-[8px] px-6 max-sm:px-3 max-sm:leading-tight transition-all group-hover:text-secondary text-center">Our core values encompass continuous learning and adaptation, proactive action coupled with reflection, collaborative knowledge-building, and adept facilitation of transformative change.</p>
          </div>
        </div> */}
      </div>
      <div className="w-full h-fit bg-white mt-52 pb-16 max-sm:py-0 max-sm:-my-10">
        <h1 className="text-secondary text-5xl max-sm:text-xl font-bold text-center">
          Our Work
        </h1>
        <SliderHome content={ourWorks} />
      </div>
    </>
  );
}
