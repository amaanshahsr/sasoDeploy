import { useEffect, useState } from "react";

function Landing() {
  const [first, setfirst] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight) {
        setfirst(true);
      } else {
        setfirst(false);
      }
    });
    document.removeEventListener("scroll", () => {
      console.log("removed");
    });
  }, [first]);

  return (
    <>
      <div className="   w-screen h-screen fixed   bg-leaves bg-fixed  top-0 left-0 font-title p-7 xl:p-14   grid grid-cols-1 grid-rows-2 ">
        <div className=" flex flex-col relative z-10 items-center justify-center  lg:items-start lg:flex lg:justify-between">
          <div className=" text-[9rem] sm:text-[15rem]  md:text-[20rem]  flex flex-col items-center lg:items-start lg:gap-3 leading-[200px] md:leading-[300px]  text-[white] font-bold  ">
            SASO
            <div className="text-[white] text-base lg:ml-11  md:text-2xl text-center lg:text-left  -tracking-normal font-semibold">
              With &#x1F496;, by Ammu's Laboratories.
            </div>
          </div>
        </div>
        <div
          className={` flex text-[white]  flex-col items-center justify-around md:justify-around  lg:flex-row  ${
            first ? "xl:items-start" : "xl:items-center"
          } lg:justify-between`}
        >
          <div className=" text-xl md:text-3xl lg:text-5xl 2xl:text-7xl text-center z-10  lg:text-left lg:w-[65%] xl:w-[50%]">
            Plant Based, Vegan,Chemical Free & Non-Toxic Products.
          </div>
          <svg
            className=" w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-w-40  animate-bounce mx-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 86.444 101.232"
          >
            <path
              fill="#fff"
              fill-rule="evenodd"
              d="m86.444 57.15-43.283 44.082L0 57.147V26.5l31.765 32.56V0h22.8v59.085l31.879-32.56z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Landing;
