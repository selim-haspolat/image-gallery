import { useRef, useEffect } from "react";
import gsap from "gsap";

const Header = ({ timeline }) => {
  let header = useRef(null);
  let imageRef = useRef(null);
  let searchRef = useRef(null);
  let aboutRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      timeline
        .fromTo(
          header,
          {
            x: 20,
            y: 20,
            opacity: 0,
            "clip-path": "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: 0.3,
            ease: "power4.out",
            "clip-path": "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
          }
        )
        .from(imageRef, {
          duration: 0.2,
          y: -100,
          opacity:0,
        })
        .from(searchRef, {
          duration: 0.2,
          y: -100,
          opacity:0,
        })
        .from(aboutRef, {
          duration: 0.2,
          y: -100,
          opacity:0,
        });
    });

    return () => ctx.revert();
  });

  window.addEventListener("scroll", (e) => {
    const header = document.querySelector(".header");
    console.log(window.scrollY);
    if (window.scrollY > 55) {
      header.classList.add("!bg-slate-900/[0.95]");
      header.classList.add("text-white");
    } else {
      header.classList.remove("!bg-slate-900/[0.95]");
      header.classList.remove("text-white");
    }
  });

  return (
    <div className="flex justify-around items-center bg-slate-100 h-20 header fixed w-screen top-0 transition-colors duration-300 z-10">
      <h1
        ref={(el) => (header = el)}
        className="text-4xl sm:text-5xl select-none"
      >
        Gallery
      </h1>
      <ul className="flex justify-around w-[50%] md:w-[40%] lg:w-[30%]">
        <li ref={(el) => (imageRef = el)}>
          <a href="#images">
            Images
          </a>
        </li>
        <li  ref={(el) => (searchRef = el)}>
          <a href="#">
            Search
          </a>
        </li>
        <li ref={(el) => (aboutRef = el)} >
          <a href="#">
            About
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
