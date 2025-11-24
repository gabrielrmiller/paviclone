import { useState, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const page2Ref = useRef(null);
  const [page2Visible, setPage2Visible] = useState(false);

  const page3Ref = useRef(null);
  const [page3Visible, setPage3Visible] = useState(false);

  const page4Ref = useRef(null);
  const [page4Visible, setPage4Visible] = useState(false);

  const navbar = useRef(null);
  const [navbarVisible, setNavbarVisible] = useState(false);

  const slideRef = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(0);

  const zoomRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    history.scrollRestoration = 'manual';
  }, []);

  useEffect(() => {
    const observer2 = new IntersectionObserver(
      ([entry2]) => {
        if (entry2.isIntersecting) setPage2Visible(true);
      },
      {threshold: 0.2}
    );
    if (page2Ref.current) observer2.observe(page2Ref.current);
    return () => observer2.disconnect();
  })
    
  useEffect(() => {
    const observer3 = new IntersectionObserver(
      ([entry3]) => {
        if (entry3.isIntersecting) setPage3Visible(true);
      },
      {threshold: 0.2}
    );
    if (page3Ref.current) observer3.observe(page3Ref.current);
    return () => observer3.disconnect();
  })

  useEffect(() => {
    const observer4 = new IntersectionObserver(
      ([entry4]) => {
        if (entry4.isIntersecting) setPage4Visible(true);
      },
      {threshold: 0.2}
    );
    if (page3Ref.current) observer4.observe(page3Ref.current);
    return () => observer4.disconnect();
  })

  useEffect(() => {
    const observer5 = new IntersectionObserver(
      ([entry5]) => {
        if (entry5.isIntersecting) setNavbarVisible(true);
      },
      {threshold: 0.2}
    );
    if (navbar.current) observer5.observe(navbar.current);
    return () => observer5.disconnect();
  })
  useEffect(() => 
  {
    const handleScroll = () => {
      if(!slideRef.current) return;
      const windowHeight = window.innerHeight;
      const rect = slideRef.current.getBoundingClientRect();
      const start = windowHeight * 0.9;
      const progress = start - rect.top;
      setX(500 - progress);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() =>
  {
    const handleScroll = () => {
      
      if(!zoomRef.current) return;
      const windowHeight = window.innerHeight;
      const rect = zoomRef.current.getBoundingClientRect();
      const start = windowHeight * 0.9;
      const progress = start - rect.top;
      const newZoom = 0.5 + progress * 0.004;
      const fadeThreshold = 4;
      const newOpacity = newZoom > fadeThreshold ? 0 : 1;

      
      setZoom(newZoom);
      setOpacity(newOpacity);
  setZoom(newZoom);
  };
  window.addEventListener("scroll", handleScroll);
  handleScroll();
  return () => window.removeEventListener("scroll", handleScroll);
}, []);





  const ts1 = `${page2Visible ? 'animate-textSlide': ''}`
  const td1 = `${page2Visible ? 'animate-textDrop': ''}`
  const fi1 = `${page2Visible ? 'animate-fadeIn': ''}`
  const ts2 = `${page3Visible ? 'animate-textSlide': ''}`
  const td2 = `${page3Visible ? 'animate-textDrop': ''}`
  const fi2 = `${page3Visible ? 'animate-fadeIn': ''}`
  const fol = `${page4Visible ? '' : 'animate-fadeOut'}`
  const navslide = `${navbarVisible ? 'animate-barSlide': ''}`
  const navfade = `${navbarVisible ? 'animate-fadeIn': ''}`

    
  return (<>
  
  <div className='body flex flex-col'>
    <div className='page-1 h-screen items-center justify-center flex flex-col mx-auto py-20'>
      <div className='text-page-1 flex gap-x-8'>
        <h1 className='delay-1 p1-text'>Meet</h1>
        <h1 className='delay-2 p1-text'>your</h1>
        <h1 className='delay-3 p1-text'>next</h1>
      </div>
      <div className='big-text-page-1 flex'>
        <h1 className="delay-4 big-text mt-8">friend.</h1>
      </div>
    </div>
    <div className="h-full" ref={page2Ref}>
      <div className='flex flex-row h-auto'>
        <div className='ml-[10.22px] p2-text'>
          <h1 className={`opacity-0 ${ts1}`} style={{animationDelay: '0.2s'}}>Intersecting</h1>
          <h1 className={`opacity-0 ${ts1}`} style={{animationDelay: '0.4s'}}>awesome</h1>
          <h1 className={`opacity-0 ${td1}  text-purp`} style={{animationDelay: '0.6s'}}>awesome</h1>
          <h1 className={`opacity-0 ${td1}  text-mid`} style={{animationDelay: '0.8s'}}>awesome</h1>
          <h1 className={`opacity-0 ${td1}  text-scale`} style={{animationDelay: '1s'}}>awesome</h1>
          <h1 className={`opacity-0 ${ts1} `} style={{animationDelay: '1.2s'}}>bits &</h1>
          <h1 className={`opacity-0 ${ts1} `} style={{animationDelay: '1.4s'}}>jokes...</h1>
        </div>
        <div className='flex flex-col gap-y-10 flex-grow items-center justify-center text-black rounded-xl w-auto'>
          <a className={`p2-container group ${fi1}`} style={{animationDelay: '1.6s'}} target="_blank" href="https://youtube.com">
          <img src="cat.webp"/><div className='transition-color duration-200 ease p2-image-label group-hover:text-[#564c39]'>Funny Cat</div></a>
          <a className={`p2-container group ${fi1} `} style={{animationDelay: '1.8s'}} target="_blank" href="https://youtube.com">
          <img src="cat.webp"/><div className='transition-color duration-200 ease p2-image-label group-hover:text-[#564c39]'>Funnier Cat</div></a>
        </div>
      </div>
    </div>
    <div className='phonebye h-52 w-full'></div>
    <div className='h-screen' ref={page3Ref}>
      <div className='h-[85vh] flex flex-row'>
        <div className='flex flex-col gap-y-10 flex-grow items-center justify-center text-black rounded-xl w-auto'>
            <a className={`p3-container group ${fi2}`} style={{animationDelay: '2.4s'}} target="_blank" href="https://youtube.com">
              <img src="cat.webp"/><div className='transition-color duration-200 ease p3-image-label group-hover:text-[#564c39]'>Funny Cat</div>
            </a>
        </div>
        <div className='flex flex-row h-auto'>
          <div className='ml-[10.22px] p3-text'>
            <h1 className={`opacity-0 ${ts2}`} style={{animationDelay: '0.3s'}}>Listening</h1>
            <h1 className={`opacity-0 ${ts2}`} style={{animationDelay: '0.6s'}}>intentively</h1>
            <h1 className={`opacity-0 ${td2}  text-purp`} style={{animationDelay: '0.9s'}}>intentively</h1>
            <h1 className={`opacity-0 ${td2}  text-mid`} style={{animationDelay: '1.2s'}}>intentively</h1>
            <h1 className={`opacity-0 ${td2}  text-scale`} style={{animationDelay: '1.5s'}}>intentively</h1>
            <h1 className={`opacity-0 ${ts2} `} style={{animationDelay: '1.8s'}}>whenever</h1>
            <h1 className={`opacity-0 ${ts2} `} style={{animationDelay: '2.1s'}}>necessary</h1>
          </div>
        </div>
      </div>
    </div>
    <div className='overflow-hidden h-[90vh] flex flex-col gap-16' ref={page4Ref}>
      <div ref={slideRef} className='text-nowrap p2-text text-center transition-transform' style={{transform: `translateX(${x}px)`, transition: "transform linear"}}>
        <h1>I want to hang out with</h1>
      </div>
      <div ref={zoomRef} className='p2-text text-center transition-transform' style={{transform: `scale(${Math.min(zoom, 3)})`, transformOrigin: 'top', transition: "transform linear, opacity 0.3s ease-in-out", opacity: opacity}}>
          <h1 className={`big-text ${fol}`}>YOU</h1>
      </div>

    </div>
    <div className='page-5 min-h-screen flex flex-col text-center'>
      <div className='flex items-center w-full justify-center'>
        <img src="rabbit.png" className='h-[20vh] shrink-0 aspect-square rounded-full overflow-hidden border-main border-solid border-2'/>
        <div className='flex flex-col px-10 text-center justify-center'>
          <h1 className='name-text'>Gabriel Miller</h1>
          <p className='sub-text'>Financial Analytics & Risk Management @ UWaterloo</p>
        </div>
      </div>
      <div className='navbar-main flex items-center w-[80%] mx-auto' ref={navbar}>
        <div className={`${navslide} mx-5 opacity-0 bar h-0 flex flex-col rounded-full border-main border-solid border-2 flex-grow`} style={{animationDelay: '0.2s'}}></div>
        <ul className='link-house flex h-16 gap-4'>
          <li><a target="_blank" href="./Resume.pdf" className={`opacity-0 ${navfade}`} style={{animationDelay: '0.4s'}}><img className='imgcol' src="resume_icon.png"></img></a></li>
          <li><a target="_blank" href="mailto:gr2mille@uwaterloo" className={`opacity-0 ${navfade}`} style={{animationDelay: '0.6s'}}><img className='imgcol' src="email.png"></img></a></li>
          <li><a target="_blank" href="www.linkedin.com/in/gabrielrmiller" className={`opacity-0 ${navfade}`} style={{animationDelay: '0.8s'}}><img className='imgcol' src="linkedin.webp"></img></a></li>
          <li><a target="_blank" href="https://github.com/gabrielrmiller" className={`opacity-0 ${navfade}`} style={{animationDelay: '1s'}}><img className='imgcol' src="github.png"></img></a></li>
        </ul>
      </div>
      <div>
        <h1 className='name-text py-5'>Recent Experiences</h1>
      </div>
    </div>
      
    </div>

  </>)
}
export default App
