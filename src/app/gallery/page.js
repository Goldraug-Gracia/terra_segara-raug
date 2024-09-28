"use client";

import TSImg from "@/components/TSImg";
import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { IoMdClose } from "react-icons/io";

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

//Opening ceremony attended by youth participants, and partners from Nusa Penida Dive Center, Nuansa Pulau, and SMAN 1 Nusa Penida
const SCUBAGallery1 = [
  {
    src: "DOS02590.JPG",
  },
  {
    src: "DOS02585.JPG",
  },
  {
    src: "DOS02647.JPG",
  },
  {
    src: "DOS02568.JPG",
  },
  {
    src: "DOS02596.JPG",
  },
];

//Dive Theory Session
const SCUBAGallery2 = [
  {
    src: "DOS02740.JPG",
  },
  {
    src: "DOS02816.JPG",
  },
  {
    src: "DOS03326.JPG",
  },
];

//Confined water session
const SCUBAGallery3 = [
  {
    src: "DOS02695.JPG",
  },
  {
    src: "DOS02682.JPG",
  },
  {
    src: "DOS02690.JPG",
  },
];

//Open water session
const SCUBAGallery4 = [
  {
    src: "DOS03270.JPG",
  },
  {
    src: "DOS03256.JPG",
  },
  {
    src: "DOS03126.JPG",
  },
  {
    src: "DOS03115.JPG",
  },
  {
    src: "DOS03231.JPG",
  },
];

//Monitoring and evaluation process attended by participants and YTSI team
const SCUBAGallery5 = [
  {
    src: "DOS03425.JPG",
  },
  {
    src: "DOS03430.JPG",
  },
  {
    src: "DOS03439.JPG",
  },
  {
    src: "DOS03450.JPG",
  },
  {
    src: "DOS03459.JPG",
  },
];

//Closing and graduation ceremony attended by participants, volunteer instructors and partners in February
const SCUBAGallery6 = [
  {
    src: "DOS03701.JPG",
  },
  {
    src: "DOS03664.JPG",
  },
  {
    src: "DOS03712.JPG",
  },
  {
    src: "DJI_0182.JPG",
  },
];

//Thanks to our amazing volunteer instructor!
const volunteer = "DOS02583.JPG";

//Beach Cleaning with local children and YTSI team
const BeachCleaning = [
  {
    src: "IMG_5460.JPG",
  },
  {
    src: "IMG_5462.JPG",
  },
  {
    src: "IMG_5464.JPG",
  },
  {
    src: "IMG_5456.JPG",
  },
  {
    src: "IMG_0328.jpg",
  },
];

const gallery1 = [
  {
    src: "IMG_5423.png",
    title: "Lorem Ipsum",
  },
  {
    src: "IMG_5446.png",
    title: "Lorem Ipsum",
  },
  {
    src: "IMG_5462.png",
    title: "Lorem Ipsum",
  },
];

const gallery2 = [
  {
    src: "IMG_5417.png",
    alt: "Lorem Ipsum",
  },
  {
    src: "IMG_5443.png",
    alt: "Lorem Ipsum",
  },
  {
    src: "IMG_5452 1.png",
    alt: "Lorem Ipsum",
  },
  {
    src: "IMG_5460.png",
    alt: "Lorem Ipsum",
  },
  {
    src: "IMG_5464.png",
    alt: "Lorem Ipsum",
  },
  {
    src: "IMG_5465.png",
    alt: "Lorem Ipsum",
  },
];

const Photos = ({ src, title }) => {
  return (
    <div className="aspect-square w-[50vw] max-sm:w-[80vw] flex flex-col items-center text-base text-center text-secondary bg-white border-4 border-secondary shadow-lg gap-4 justify-center py-4">
      <div className="w-11/12 h-auto aspect-square overflow-hidden relative">
        <TSImg
          src={src}
          fill={true}
          alt={title}
          className="transition-all object-cover aspect-square object-center hover:scale-110"
        />
      </div>
      <p>{title}</p>
    </div>
  );
};

const ImgGallery = ({ gallery }) => {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <TSImg
            src={gallery[i].src}
            width={300}
            height={300}
            className={`object-cover object-center aspect-square w-[${
              1 / gallery.length
            }]`}
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "mx-auto w-full py-5",
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {gallery.map((e, i) => {
          return (
            <div className="w-fit h-[75vh] relative">
              <TSImg
                src={e.src}
                fill={true}
                alt={e.title}
                className={`mx-auto object-contain object-center h-auto w-fit`}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default function Gallery() {
  const GalleryPhoto = ({ gallery, title }) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(!open);
    };
    return (
      <>
        {/* <div className='w-full h-fit flex flex-wrap px-10 gap-2'>
                {gallery.map((e, i)=>{
                    console.log(e.src)
                    return(
                        <div className='overflow-hidden w-fit h-fit flex-1 last:grow' key={i}>
                            <Image
                                {...e}
                                width={300}
                                height={225}
                                className='hover:scale-110 transition-all ease-in  object-cover object-center'
                                />
                        </div>
                    )
                })}
                </div> */}
        <div
          className="aspect-video w-[75vw] mx-auto bg-primary overflow-hidden rounded-2xl relative group"
          onClick={handleClick}
        >
          <TSImg
            {...gallery[0]}
            fill={true}
            className="group-hover:scale-110 w-full aspect-video transition-all ease-in object-cover object-center group-hover:brightness-50 group-hover:blur-sm"
          />
          <div className="absolute w-2/3 h-fit top-1/2 -translate-y-[50%] left-1/2 -translate-x-[50%] group-hover:text-white group-hover:block hidden transition-all leading-relaxed cursor-pointer text-xl max-sm:text-base">
            <b>{title}</b>
          </div>
        </div>
        {/* <div className='w-2/3 text-center text-white -translate-y-14 text-base last:text-secondary'>
                    {title}
                </div> */}
        <div
          id="modal"
          className={`transition-all fixed left-0 top-0 w-full h-screen bg-[#000000] bg-opacity-90 z-50 overflow-hidden ${
            open ? "block" : "hidden"
          }`}
        >
          <div
            id="modalContent"
            className="relative h-[80vh] w-2/3 mx-auto bottom-0 pt-20 pb-5"
          >
            <div
              onClick={handleClick}
              className="absolute right-0 top-3 w-fit h-fit aspect-square z-20 hover:scale-110 hover:outline-4"
            >
              <IoMdClose className="text-white text-3xl" />
            </div>
            <ImgGallery gallery={gallery} />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="w-screen h-screen max-sm:max-h-64 flex justify-between px-20 max-sm:px-6 pt-32 pb-24 items-center bg-secondary relative">
        <div className="text-white -bottom-0 relative w-[45%]">
          <h1 className="leading-[0.8] text-8xl max-sm:text-4xl">
            Seas of
            <br />
            <b>Impact.</b>
          </h1>
        </div>
        <TSImg
          src={"IMG_5459.jpg"}
          width={450}
          height={450}
          className="aspect-square object-cover rounded-bl-[200px] max-sm:rounded-bl-[80px] relative -bottom-0 translate-y-8 max-sm:translate-y-2 max-sm:w-44"
        />
        <Image
          src={"/Object-graphic2 1.png"}
          width={300}
          height={300}
          className="absolute left-0 bottom-0 translate-y-5 hidden"
        />
        <Image
          src={"/Object-graphic0 3.png"}
          width={125}
          height={125}
          className="absolute right-7 top-24 hidden"
        />
        <Image
          src={"/Object-graphic0 3.png"}
          width={125}
          height={125}
          className="absolute right-1/3 bottom-12 translate-x-0 hidden"
        />
      </div>
      <div className="max-w-screen w-screen h-fit py-20 max-sm:py-10 flex flex-col gap-[72px] justify-center items-center bg-gradient-to-t from-white via-secondary via-50% to-100% text-2xl max-sm:text-lg text-secondary text-center">
        <h1 className="max-w-fit mx-32 max-sm:mx-10 translate-y-2 max-sm:translate-y-0 font-bold">
          Empowering Local Youth through SCUBA Dive Training Scholarship - Batch
          1/2024
        </h1>
        <GalleryPhoto
          gallery={SCUBAGallery1}
          title={
            "Opening ceremony attended by youth participants, and partners from Nusa Penida Dive Center, Nuansa Pulau, and SMAN 1 Nusa Penida"
          }
        />
        <GalleryPhoto gallery={SCUBAGallery2} title={"Dive Theory Session"} />
        <GalleryPhoto
          gallery={SCUBAGallery3}
          title={"Confined water session"}
        />
        <GalleryPhoto gallery={SCUBAGallery4} title={"Open water session"} />
        <GalleryPhoto
          gallery={SCUBAGallery5}
          title={
            "Monitoring and evaluation process attended by participants and YTSI team"
          }
        />
        <GalleryPhoto
          gallery={SCUBAGallery6}
          title={
            "Closing and graduation ceremony attended by participants, volunteer instructors and partners in February "
          }
        />
        <Photos
          src={volunteer}
          title={"Thanks to our amazing volunteer instructor!"}
        />
        <GalleryPhoto
          gallery={BeachCleaning}
          title={"Beach Cleaning with local children and YTSI team"}
        />
      </div>
    </>
  );
}
