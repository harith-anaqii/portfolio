
"use client";
//regenerate this page every 60 seconds

import { use, useState, useEffect, useRef } from "react";
import BigBlackCube from "./cubehello";
import BigBlackCube2 from "./cubehello2";
export default function Home() {
  const [open, setOpen] = useState(false);
  const [showHarith, setShowHarith] = useState(false);
  const [showAnaqi, setShowAnaqi] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const [lineVisible, setLineVisible] = useState(false);
  const [typedText, setTypedText] = useState(""); // Typewriter state
  const profileRef = useRef(null);
   const [imgMoved, setImgMoved] = useState(false);
     const leftContentRef = useRef(null);
      const [imageVisible, setImageVisible] = useState(false);
  const imageSectionRef = useRef(null);

  useEffect(() => {
    const timeout1 = setTimeout(() => setShowHarith(true), 200);
    const timeout2 = setTimeout(() => setShowAnaqi(true), 900);
    const timeoutNav = setTimeout(() => setNavVisible(true), 100);

       const handleScroll = () => {
      if (!leftContentRef.current) return;
      const rect = leftContentRef.current.getBoundingClientRect();
      if (
        window.innerWidth < 768 &&
        rect.top < window.innerHeight &&
        rect.bottom > 0
      ) {
        setImgMoved(true);
      }
    };


     window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeoutNav);
       window.removeEventListener("scroll", handleScroll);
    };
  }, []);

useEffect(() => {
  const handleScroll = () => {
    if (!profileRef.current) return;
    const rect = profileRef.current.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setLineVisible(true);
    }
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

// Scroll effect for imageSectionRef (imageVisible)
useEffect(() => {
  const handleScroll = () => {
    if (!imageSectionRef.current) return;
    const rect = imageSectionRef.current.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setImageVisible(true);
    }
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

// Add this useEffect after your other useStates and before your return statement

useEffect(() => {
  if (!open) return;

  const handleClickOutside = (event) => {
    // If the dropdown or button is clicked, do nothing
    const dropdown = document.getElementById("mobile-dropdown");
    const button = document.getElementById("mobile-menu-btn");
    if (
      dropdown && dropdown.contains(event.target)
    ) return;
    if (
      button && button.contains(event.target)
    ) return;
    setOpen(false);
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, [open]);
  // Typewriter effect for the entire box text
  useEffect(() => {
    
    
    const fullText = `🧑‍🦰Name : HARITH ANAQI\n
    ⏲️Age : 17\n
    🏠Location : Kuantan,Pahang\n
    🏫School : 1] Sekolah Rendah AL Irsyad\n
    2] Sekolah Menengah Kebangsaan Abdul Rahman Talib\n
    3] MRSM ATM Bera\n
    Hobbies : 1] 🧑‍💻Programming\n
    2] 🐟🌱Aquascaping\n
    3] 📷Photography\n
    📜 SPM Results : 1A+, 3A, 2A-, 2B+,1 C
    \n English Proficiency : C1 (CEFR)\n

    
    `;
    if (lineVisible && typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 18);
      return () => clearTimeout(timeout);

      
    }
  }, [lineVisible, typedText]);

  return (
    <main className=" overflow-hidden min-h-screen bg-white font-poppins text-white flex flex-col items-stretch ">
      <div
        className={`
          fixed top-4 left-1/2 -translate-x-1/2 w-[95vw] max-w-full h-16  outline-1 outline-gray-400 rounded-2xl flex items-center justify-between p-4 shadow-xl z-20
          transition-transform duration-700 ease-out bg-white/30 backdrop-blur
          ${navVisible ? "translate-y-0" : "-translate-y-32"}
        `}>
        <div className="flex items-center">
          <img src="/logopng.png" alt="logo" className="h-15 w-15 object-contain" />
        </div>


        {/* Mobile: Dropdown menu in corner */}
        <div className="block md:hidden">
          <button
            className="bg-white text-gray-700 rounded-lg p-2 shadow"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
          {open && (
            <div className="absolute right-4 top-16 bg-white text-gray-700 shadow p-4 z-10 rounded-lg">
              <ul>
                <li className="py-1 px-2 hover:bg-gray-100 rounded">Main Page</li>
                <li className="py-1 px-2 hover:bg-gray-100 rounded">Experience</li>
                <li className="py-1 px-2 hover:bg-gray-100 rounded">Projects</li>
              </ul>
            </div>
          )}
        </div>


        {/* Desktop: Button */}
        <div className="hidden md:block">
          <button className="bg-white hover:shadow-xl text-gray-700 rounded px-4 py-2 shadow outline-1 outline-gray-400 hover:bg-gray-100 transition duration-200">
            Portfolio 
          </button>
        </div>
      </div>


      {/* Responsive side-by-side (desktop) or stacked (mobile) layout */}
      <div className="flex flex-col-reverse md:flex-row flex-1 w-full min-h-screen">


        {/* Left div (will be at the bottom on mobile, left on desktop) */}
<div className="flex-1 bg-white flex flex-col items-center justify-center min-h-[50vh]" 
id="left-content" style={{backgroundColor: 'lightyellow'}}
ref={leftContentRef}
>

  {/* Overlapping image */}
         <div
            className={`w-full max-w-xs mb-[-20rem] z-10 transition-transform duration-1000
              ${imgMoved ? "translate-y-[-20px] translate-x-[-20px]" : ""}
              md:hover:translate-y-[-20px] md:hover:translate-x-[-20px]`}
          >
    <img
      src="/me.jpeg"
      alt="Profile"
      className="w-full h-100 rounded-4xl shadow-xl object-cover"
    />
  </div>
  {/* Black rounded box */}
  <div className="bg-gray-500 rounded-2xl shadow-2xl h-[300px] px-5 py-19 flex items-center justify-center w-full max-w-xs z-0  ">
    <span className="text-black text-2xl font-bold"></span>
  </div>
</div>
        {/* Right div (will be at the top on mobile, right on desktop) */}
  <div
    id="right-content"
    className="overflow-hidden flex-none w-full md:flex-1 flex flex-col justify-center items-center bg-emerald-500 min-h-screen antialiased [text-rendering:optimizeLegibility] [font-smoothing:antialiased] [font-smooth:always] md:text-right text-center"
    style={{ minWidth: 0, backgroundColor: '#06D6A0' }}
  >
    <div className="overflow-hidden absolute md:left-500 right-0 top-140 h-[200px] w-[200px]  pointer-events-none z-0 rotate-180 transition-opacity duration-1000 ">
    <BigBlackCube />
    </div>

    <div className="overflow-hidden absolute md:left-100 left-0 bottom-100 h-[270px] w-[270px]  pointer-events-none z-0 rotate-180 transition-opacity duration-1000">
    <BigBlackCube2/>
    </div>
    <div className="absolute hidden md:block  bottom-100 right-0 w-[580px] h-[580px] z-10">
  <BigBlackCube />
</div>

{/* Animated diagonal line: bottom left to top right (grows in) */}
<div className="absolute left-0 bottom-0 h-[60vh] md:h-[45vh] w-screen pointer-events-none z-0">
  <div className="absolute left-0 bottom-0 w-full h-full pointer-events-none">
    <div
      className="animate-diagonal-grow origin-bottom-left "
      style={{
        width: "1px",
        height: "100%",
        backgroundColor: "lightyellow",
      }}
    />
  </div>
</div>




{/* Diagonal line: top right to bottom left (rotated 180deg) */}
<div className="absolute right-0 top-0 h-[60vh] md:h-[45vh] w-screen pointer-events-none z-10 rotate-180">
  <div className="absolute left-0 bottom-0 w-full h-full pointer-events-none">

    <div
      className="animate-diagonal-grow origin-bottom-left "
      style={{
        width: "1px",
        height: "100%",
        backgroundColor: "lightyellow",
      }}
    />
  </div>
</div>

          <h2 className="bg-black text-lg md:text-3xl font-bold mb-1 transition-opacity duration-1000 text-white antialiased" style={{color: '#06D6A0' , backgroundColor: 'lightyellow'}}>
            ⚠️EARLY ACCESS
          </h2>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 transition-opacity duration-1000 text-white antialiased" style={{color: 'lightyellow'}}>
            HELLO MY NAME IS
          </h2>
          <h1
            className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text transition-opacity duration-1000 antialiased"
            style={{
              WebkitTextStroke: '2px lightyellow'
            }}
          >
            <span className={showHarith ? "opacity-100 transition-opacity duration-1000 antialiased" : "opacity-0 transition-opacity duration-1000 antialiased"}>
              HARITH
            </span>
            <br />
            <span className={showAnaqi ? "opacity-100 transition-opacity duration-1000 antialiased" : "opacity-0 transition-opacity duration-1000 antialiased"}>
              ANAQI
            </span>
          </h1>
        </div>
      </div>


      {/* Bottom div with animated line */}
      <div className="w-full bg-white py-8 flex items-center justify-center">
        <div className="flex flex-col items-center" ref={profileRef}>
          <div className={`bg-white rounded-2xl shadow-xl px-8 py-6 flex items-center justify-center outline-1 outline-gray-200 transition-opacity duration-1000 ${lineVisible ? "opacity-100" : "opacity-0"}`}>
            <span className="text-black text-2xl font-bold">🧑PROFILE</span>
          </div>


          {/* Animated vertical gray line */}
          <div className="relative h-32 flex justify-center">
            <div className="w-0.5 bg-gray-100 overflow-hidden">
              <div className={`${lineVisible ? "animate-grow" : "h-0"} h-full w-full bg-gray-300 origin-top`} />
            </div>
          </div>
          <div className={`bg-white rounded-2xl shadow-lg px-8 py-6 flex items-center justify-center outline-1 outline-gray-200 transition-opacity duration-1000 ${lineVisible ? "opacity-100" : "opacity-0"} md:max-w-[400px]: w-full`}>
            <span className="text-black text-lg font-bold font-mono whitespace-pre-line text-center w-full">
              {typedText}
              {lineVisible && typedText.length < 10 && <span className="animate-pulse">|</span>}
            </span>

          </div>
         <div className="relative h-32 flex justify-center">
            <div className="w-0.5 bg-gray-100 overflow-hidden">
              <div className={`${lineVisible ? "animate-grow" : "h-0"} h-full w-full bg-gray-300 origin-top`} />
            </div>
          
          </div>
  <div
  ref={imageSectionRef}
  className={`bg-white rounded-2xl shadow-lg px-8 py-6 flex items-center justify-center outline-1 outline-gray-200 transition-opacity duration-1000 ${lineVisible ? "opacity-100" : "opacity-0"} md:max-w-[400px]: w-full`}
>
 <span className="text-black text-lg font-bold font-mono whitespace-pre-line text-center w-full">
  Since 2020, I&apos;ve been constantly sharpening my skills. For others, computers might not seem like much. For me, It&apos;s life
</span>
  <div className="flex gap-4 justify-center w-full flex-wrap">
    {[
      "/imagepro1.jpeg",
      "/imagepro2.jpeg",
      "/imagepro3.jpeg",
      "/imagepro4.jpeg",
      "/imagepro5.jpeg",
      "/imagepro6.jpeg",
    ].map((src, idx) => (
      <div
        key={src}
        className="overflow-hidden w-20 h-20 rounded-xl shadow-lg bg-gray-100 flex-shrink-0"
      >
        <img
          src={src}
          alt={`Animated ${idx + 1}`}
          className={`object-cover w-full h-full ${imageVisible ? "animate-slide-in-right" : ""}`}
        />
      </div>
    ))}
  </div>
</div>
        </div>

      </div>
 
    </main>
  );
}