import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LightingEffect from "../components/LightingEffect";

gsap.registerPlugin(ScrollTrigger);

const Page6 = () => {
  const secondDivRef = useRef(null);
  const imageRef2 = useRef(null);
  const narrationBoxRef = useRef(null);

  useEffect(() => {
    // Animate first div (left box)

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
        x: "20%",  
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
    <div style={styles.container}>
       <LightingEffect count={25} />
      <div ref={narrationBoxRef} style={styles.narrationBox}>
        SOMEWHERE ON EARTH-919.....
      </div>
      <div ref={secondDivRef} style={styles.whiteBoxRight}>
      HE SAT THERE, OVERWHELMED AND LOST IN THOUGHT, WONDERING WHY EVERYTHING SEEMED TO BE FALLING APART. HIS DREAMS, HIS RELATIONSHIPS, HIS FINANCES—IT ALL FELT LIKE A NEVER-ENDING SERIES OF FAILURES. THE WEIGHT OF IT ALL WAS TOO MUCH TO BEAR
      </div>
      <div ref={imageRef2} style={styles.imageContainerLeft}>
        <img src="/images/Dennis_Sad.jpg" alt="Dennis1" style={styles.image} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    background: "black",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxShadow: "0px -20px 40px rgba(255, 255, 255, 0.1)",
  },
  narrationBox: {
    position: "absolute",
    top: "10%",
    left: "5%",
    padding: "10px 20px",
    background: "#f8e71c",
    border: "3px solid black",
    fontSize: "20px",
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    fontFamily: "Comic Sans MS, sans-serif",
    boxShadow: "5px 5px 0px red",
    transform: "rotate(-3deg)",
    whiteSpace: "nowrap",
  },
  whiteBoxRight: {
    width: "58%",
    height: "200px",
    backgroundColor: "white",
    display: "flex",
    fontFamily: "Comic Sans MS, sans-serif",
    padding:23,
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    fontWeight: "bold",
    color: "black",
    position: "absolute",
    top: "38.5%",
    right: "0%",  // Adjust this to ensure visibility
    borderRadius: "10px",
    boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.2)",
    transform: "translateX(100%)",  // Add this
  },
  
  imageContainer: {
    position: "absolute",
    top: "15%",
    right: "0",
    width: "30vw",
    height: "40vh",
  },
  imageContainerLeft: {
    position:"Absolute",
    top: "31%",
    left: "0",
    width: "30vw",
    height: "40vh",
  },
  image: {
    maxWidth: "100%",  
      maxHeight: "100%", 
      border: "5px solid white",  // White Border
      boxShadow: "10px 10px 20px rgba(255, 255, 255, 0.3)", 
  },
};

export default Page6;



