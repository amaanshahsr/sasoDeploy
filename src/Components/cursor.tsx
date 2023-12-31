import { MutableRefObject, useEffect, useRef, useState } from "react";
import { throttle } from "underscore";

function Cursor() {
  const cursorRef = useRef() as MutableRefObject<HTMLDivElement>;
  const [interactable, setinteractable] = useState<any>(false);
  const [link, setlink] = useState<any>(false);
  const [frontNav, setfrontNav] = useState<any>(false);
  const [backNav, setbackNav] = useState<any>(false);

  const mouseMoveHandler = (e: MouseEvent) => {
    const { target } = e;
    let interactable;
    let link;
    let frontNav;
    let backNav;
    if (target instanceof HTMLElement) {
      interactable = target.className?.includes("interactable");
      link = target.className?.includes("link");
      frontNav = target.className?.includes("frontNav");
      backNav = target.className?.includes("backNav");
    }
    setbackNav(backNav);
    setfrontNav(frontNav);
    setinteractable(interactable);
    setlink(link);
    const { clientX, clientY } = e;
    const mouseX = clientX - cursorRef.current.offsetWidth / 2;
    const mouseY = clientY - cursorRef.current.offsetHeight / 2;

    const keyframes = {
      transform: `translate(${mouseX + 16}px,${mouseY + 16}px) scale(${
        interactable && link ? 1.5 : 1
      })`,
    };

    cursorRef.current.animate(keyframes, {
      fill: "forwards",
      duration: 500,
    });
  };
  useEffect(() => {
    document.addEventListener("mousemove", throttle(mouseMoveHandler, 75));
  }, []);

  return (
    <div
      className={` xl:block hidden p-2 bg-white border-white border-2  ${
        interactable ? "mix-blend-darken" : " "
      }   z-[99999] pointer-events-none rounded-full fixed flex  ease-in-out items-center text-opacity-50  justify-center   `}
      ref={cursorRef}
    >
      {link ? (
        <svg
          className="w-8 h-8 duration-200 ease-in-out  fill-black"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
        </svg>
      ) : null}
      {backNav && (
        <svg
          className="w-8 h-8 duration-200 ease-in-out rotate-[225deg] fill-black"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
        </svg>
      )}
      {frontNav && (
        <svg
          className="w-8 h-8 duration-200 ease-in-out rotate-[45deg] fill-black"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
        </svg>
      )}
    </div>
  );
}

export default Cursor;
