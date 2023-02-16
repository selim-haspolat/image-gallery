import Card from "./Card";
import data from "./../utility/data";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const Main = ({ timeline }) => {
  let main = useRef(null);
  let container = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      timeline.fromTo(container,{
        'clip-path': 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
      },{
        duration: .3,
        'clip-path': 'polygon(80% 0%, 0% 0%, 0% 100%, 80% 100%)',
      }).to(container,{
        'clip-path': 'polygon(80% 0%, 41% 0%, 41% 100%, 80% 100%)',
        ease: 'expo'
      }).to(container,{
        duration: .5,
        'backgroundColor': 'rgba(0,0,0,0,)',
        'clip-path': 'polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)',
      }).fromTo(
        main,
        {
          "clip-path": "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
        },
        {
          duration: 1,
          ease: "power4.out",
          "clip-path": "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
        }, 2.3
      );
    });

    return () => ctx.revert();
  });

  return (
    <div ref={el => container = el} className="bg-slate-800 -z-10">
      <div
        ref={(el) => (main = el)}
        id="images"
        className="mt-20 mb-10 p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-10"
      >
        {data.map(({ photographer, src }, index) => (
          <Card key={index} src={src} />
        ))}
      </div>
    </div>
  );
};

export default Main;
