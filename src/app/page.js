
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
    <main className=" overflow-hidden min-h-screen bg-white font-satoshi text-white flex flex-col items-stretch  ">
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
    <li><a href="#Biodata">Biodata</a></li>
    <li><a href="#Skills">Skills</a></li>
    <li><a href="#Hero">Top</a></li>
  </ul>
</div>



</div>
 {/*hero*/} 
<div className="hero min-h-screen  "  id="Hero" style={{ backgroundImage: "url(/imagepro1.nef)" }}>
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
      "url(imagepro2.nef)",
  }}
>
 
 <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(imagepro2.nef)",
  }}
>


  <div className="hero-overlay"></div>

  <div className="hero-content w-full flex flex-col items-center px-4 " id="Skills">
     <h2 className="text-5xl md:text-6xl  font-satoshi  font-bold tracking-tight text-white mb-10 underline">My Expertise</h2>
 <span className="text-lg md:text-lg  font-poppins tracking-tight text-white mb-10 text-center">My journey in doing what I love has equipped me with a versatile skill set, <p>constantly evolving and expanding</p></span>
    <div className="w-full max-w-6xl flex flex-wrap justify-center gap-6">
      {/* Card 1 */}
      <div className="card w-80 bg-white/10 backdrop-blur shadow-sm">
        <figure>
          <img
            src="/ehr.jpeg"
            alt="Programming"
          />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title underline">Programming (2017/2020)</h2>
          <p>My journey into computers began as a passion project back in 2017 where I used to salvage scrapped computers which opened me opportunities to grow more into programming in 2020 and further motivate myself to learn various languages and frameworks. I'm passionate about building intuitive UIs and always eager to collaborate on innovative projects and contribute to a team's growth </p>
          <div className="card-actions justify-end">

          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card w-80 bg-white/10 backdrop-blur shadow-sm">
        <figure>
          <img
            src="aquascape.jpg"
            alt="Card Title"
          />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title  underline">Aquascaping (2019)</h2>
          <p>My creative outlet and a journey into living art. I'm dedicated to crafting beautiful and balanced underwater ecosystems</p>
          <div className="card-actions justify-end">
            
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card w-80 bg-white/10 backdrop-blur shadow-sm">
        <figure>
          <img
            src="imagepro2.jpeg"
            alt="Card Title"
          />
        </figure>
    t    <div className="card-body text-white">
          <h2 className="card-title underline">Photography (2022)</h2>
          <p>For me, photography is an art form a means to interpret and present the beauty I find in the world. I'm drawn to nature's beauty and strive to create images that resonate and tell a compelling story. </p>
          <div className="card-actions justify-end">
       
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(scenery.nef)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold underline">My Projects</h1>
      <span className="text-lg md:text-lg  font-poppins tracking-tight text-white mb-10 text-center"> Will update this later with real work. Stay Tuned!</span>

    </div>
  </div>
</div>

<div
  className="hero min-h-screen bg-cover bg-center"
  id="Biodata"
  style={{ backgroundImage: "url('tent.nef')" }}
>
  <div className="hero-overlay bg-opacity-60"></div>
  
  <div className="hero-content flex-col lg:flex-row text-white px-4">
    <img
      src="anaqi.jpg"
      className="w-full max-w-xs rounded-lg shadow-2xl mb-6 lg:mb-0"
      alt="profile"
    />

    <div className="card  w-full max-w-xl bg-white/10 backdrop-blur shadow-sm p-6 text-white">
      <div className="text-center lg:text-left">
        <h1 className="text-3xl font-bold underline mb-4">
          HARITH ANAQI BIN MOHD HANAFI
        </h1>
        <p className="mb-6">
          A 17-year-old teenager who lives in Kuantan, Pahang. Completed his
          primary education at Sekolah Rendah Islam Al-Irsyad Balok, then
          completed his secondary education at Sekolah Menengah Abdul Rahman
          Talib and MRSM ATM Bera.
        </p>

        <a
          className="btn btn-neutral"
          href="mailto:harithanaqi4@gmail.com"
        >
          Email Me
        </a>
      </div>
    </div>
  </div>
</div>
<footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
  <aside>
    <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      className="fill-current">
      <path
        d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
    </svg>
    <p>
      HARITH ANAQI BIN MOHD HANAFI
      <br />
      All photos inside this page are by HARITH ANAQI
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Socials</h6>
    <div className="grid grid-flow-col gap-4">
     <a href="https://www.instagram.com/harith_anaqii?igsh=MTc0cTQ1aTBpMnhiMA=="> INSTAGRAM</a>
     <a> FACEBOOK </a>

    </div>
  </nav>
</footer>


    </main>
  );
}