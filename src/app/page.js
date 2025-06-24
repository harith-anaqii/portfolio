
"use client";
//regenerate this page every 60 seconds



import { use, useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import BigBlackCube from "./cubehello";
import BigBlackCube2 from "./cubehello2";

gsap.registerPlugin(SplitText);



export default function Home() {




  const [navVisible, setNavVisible] = useState(false);
  const [lineVisible, setLineVisible] = useState(false);
  const [typedText, setTypedText] = useState(""); // Typewriter state
  const profileRef = useRef(null);
  const leftContentRef = useRef(null);
  const imageSectionRef = useRef(null);
  
useEffect(() => {
  const timeout = setTimeout(() => {
    const split = new SplitText(".split-text", {
      type: "chars,words,lines",
    });

    gsap.from(split.chars, {
      opacity: 0,
      y: 20,
      stagger: 0.05,
      duration: 1,
      ease: "power2.out",
    });
  }, 100);

  return () => clearTimeout(timeout);
}, []);



  useEffect(() => {
  
    const timeoutNav = setTimeout(() => setNavVisible(true), 100);




    return () => {

      clearTimeout(timeoutNav);
       window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (  
    <main className=" overflow-hidden min-h-screen bg-white font-poppins text-white flex flex-col items-stretch  ">
      <div
        className={`
          fixed top-4 left-1/2 -translate-x-1/2 w-[95vw] max-w-full h-16  outline-1 outline-gray-400 rounded-2xl flex items-center justify-between p-4 shadow-xl z-20
          transition-transform duration-700 ease-out bg-white/30 backdrop-blur
          ${navVisible ? "translate-y-0" : "-translate-y-32"}
        `}>
        <div className="flex items-center">
          <img src="/logopng.png" alt="logo" className="h-15 w-15 object-contain" />
        </div>

<div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn bg-white text-black m-1">
    Menu
  </div>
  <ul
    tabIndex={0}
    className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 bg-white text-black"
  >
    <li><a>Biodata</a></li>
    <li><a>Skills</a></li>
        <li><a>Achievements</a></li>
  </ul>
</div>



</div>
 {/*hero*/} 
<div className="hero min-h-screen" style={{ backgroundImage: "url(/imagepro1.nef)" }}>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
<h1 className="split-text mb-5 text-6xl font-bold text-white">
  HARITH <br /> ANAQI
</h1>
      <p className="mb-5">A Web Developer, Photographer and an Aquascaper.</p>
      <button className="btn bg-white text-black outline-gray-100">See my work</button>
    </div>
  </div>
</div>
<div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}
>
 <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}
>
  <div className="hero-overlay"></div>

  <div className="hero-content w-full flex flex-col items-center px-4">
    <div className="w-full max-w-6xl flex flex-wrap justify-center gap-6">
      {/* Card 1 */}
      <div className="card w-80 bg-white/30 backdrop-blur shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Programming"
          />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title">Programming (2017/2020)</h2>
          <p>One of my first hobbies. Self taught my way to where I am. Looking forward to grow with others! </p>
          <div className="card-actions justify-end">

          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card w-80 bg-white/30 backdrop-blur shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Card Title"
          />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title">Aquascaping (2019)</h2>
          <p>One of my unique skills. It taught me to be more responsible with our actions and how important patience is in fixing problems.  </p>
          <div className="card-actions justify-end">
            
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card w-80 bg-white/30 backdrop-blur shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Card Title"
          />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title">Photography (2022)</h2>
          <p>A new, freshly discovered skill! It enables me to grow my own artistic side and flourish my creativity!</p>
          <div className="card-actions justify-end">
       
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    </main>
  );
}