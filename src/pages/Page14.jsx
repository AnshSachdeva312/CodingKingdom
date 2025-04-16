import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LightingEffect from "../components/LightingEffect";

gsap.registerPlugin(ScrollTrigger);

const Page14 = () => {
  const secondDivRef = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3=useRef(null);
  const narrationBoxRef = useRef(null);
  const backgroundRef=useRef(null);

  useEffect(() => {
    // Animate first div (left box)
    gsap.fromTo(
        backgroundRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: backgroundRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
        }
      );
    // Animate second div (right box) coming from right
    gsap.fromTo(
        secondDivRef.current,
        { x: "100%", opacity: 0 },  // Changed from "200%" to "100%"
        {
          x: "0%",  
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: secondDivRef.current,
            start: "top 90%",  // Adjust start position
            end: "top 60%",
            scrub: true,
          },
        }
      );

    

    // Animate second image coming from left
    gsap.fromTo(
      imageRef2.current,
      { x: "-100%", opacity: 0, rotateY: -60 },
      {
        x: "0%",  
        opacity: 1,
        rotateY: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef2.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
        imageRef3.current,
        { x: "150%", opacity: 0, rotateY: -60 },
        {
          x: "50%",  
          opacity: 1,
          rotateY: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef2.current,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
        }
      );
  }, []);

  return (
    <div style={styles.container} ref={backgroundRef}>
      <LightingEffect count={25} />
      <div style={styles.background} /> {/* Background image */}
      <div ref={secondDivRef} style={styles.whiteBoxRight}>
      THE COUNCIL OF DENNIS, IN THEIR FUTURISTIC COUNCIL CHAMBER, WORKED QUICKLY TO GO BACK IN TIME. THEY TRAVELED TO THAT CRUCIAL MOMENT—THE DAY YOUNG DENNIS FELL OFF HIS SKATEBOARD. WITH CAREFUL PRECISION, THEY INTERVENED, SAVING THE CHILD FROM THE FALL. THAT SIMPLE ACTION RESET THE TIMELINE, ERASING THE CHAOS CAUSED BY MURPHY'S LAW AND GIVING DENNIS A FRESH START. NO MORE ACCIDENTS. NO MORE FAILURES. FOR THE FIRST TIME IN YEARS, EVERYTHING SEEMED POSSIBLE. THE CYCLE WAS BROKEN. DENNIS COULD FINALLY MOVE FORWARD, FREE FROM THE CURSE OF BAD LUCK. HIS JOURNEY, ONCE AGAIN, HAD A NEW BEGINNING
      </div>
    </div>
  );
};

const styles = {
    container: {
      height: "100vh",
      background: "black",
      display: "flex",
      
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      boxShadow: "0px -20px 40px rgba(255, 255, 255, 0.1)",
      overflow: "hidden",
    },
    background: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      
      
      zIndex: -1,
    },
    narrationBox: {
      position: "absolute",
      top: "10%",
      left: "5%",
      padding: "10px 20px",
      background: "white",
      border: "3px solid black",
      fontSize: "20px",
      fontWeight: "bold",
      color: "black",
      textAlign: "center",
      fontFamily: "Comic Sans MS, sans-serif",
      boxShadow: "5px 5px 0px black",
      transform: "rotate(-3deg)",
      whiteSpace: "nowrap",
    },
    whiteBoxRight: {
      width: "60%",
      height: "400px",
      backgroundColor: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "justify",
      padding: "23px",
      fontSize: "20px",
      fontWeight: "bold",
      fontFamily: "Comic Sans MS, sans-serif",
      color: "black",
      
      borderRadius: "10px",
      boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.2)",
      transform: "translateX(100%)",
      zIndex:2
    },
    imageContainerLeft: {
      position: "absolute",
      top: "34.5%",
      left: "0",
      width: "75vw",  // You can modify this for image size
      height: "80vh", // You can modify this for image size
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex:1
    },
    imageContainerRight: {
        position: "absolute",
        top: "44.5%",
        Right: "0",
        width: "50vw",  // You can modify this for image size
        height: "60vh", // You can modify this for image size
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex:1
      },
    image: {
      maxWidth: "100%",  
      maxHeight: "100%", 
        // White Border
      
       
    },
  };
  
  export default Page14;
  
  
  




