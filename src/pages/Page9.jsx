import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LightingEffect from "../components/LightingEffect";

gsap.registerPlugin(ScrollTrigger);

const Page9 = () => {
  const firstDivRef = useRef(null);
  const secondDivRef = useRef(null);
  const imageRef = useRef(null);
  const imageRef2 = useRef(null);
  const narrationBoxRef = useRef(null);

  useEffect(() => {
    // Animate first div (left box)
    gsap.fromTo(
      firstDivRef.current,
      { x: "-100%", opacity: 0 },
      {
        x: "0%",  
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: firstDivRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    // Animate second div (right box) coming from right
    gsap.fromTo(
      secondDivRef.current,
      { x: "200%", opacity: 0 },
      {
        x: "0%",  
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: secondDivRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    

    // Animate second image coming from left
    gsap.fromTo(
      imageRef2.current,
      { x: "100%", opacity: 0, rotateY: -60 },
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
  }, []);

  return (
    <div style={styles.container}>
      <LightingEffect count={25} />
      <div ref={firstDivRef} style={styles.whiteBox}>
      FUTURE DENNIS PAUSED, HIS VOICE STEADY AND CONVINCING. 'THIS PORTAL LEADS TO A PLACE WHERE YOU CAN FIND THE TRUTH. ALL THE ANSWERS YOU'VE BEEN SEARCHING FOR—THE REASON WHY MURPHY'S LAW CONSTANTLY HAUNTS YOU—ARE ON THE OTHER SIDE. YOU HAVE TO TRUST ME, IT'S THE ONLY WAY TO CHANGE YOUR FUTURE
      </div>
      <div ref={imageRef2} style={styles.imageContainer}>
        <img src="/images/DennisPortal.jpg" alt="Dennis1" style={styles.image} />
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
  whiteBox: {
    width: "58%",
    height: "200px",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding:20,
    fontFamily: "Comic Sans MS, sans-serif",
    fontSize: "24px",
    fontWeight: "bold",
    color: "black",
    position: "absolute",
    left: "0",
    top: "38%",
    borderRadius: "10px",
    boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.2)",
  },
  whiteBoxRight: {
    width: "58%",
    height: "200px",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    fontWeight: "bold",
    color: "black",
    position: "absolute",
    right: "0",
    top: "77%",
    borderRadius: "10px",
    boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.2)",
  },
  imageContainer: {
    position: "absolute",
    top: "31%",
    right: "0",
    width: "30vw",
    height: "40vh",
  },
  imageContainerLeft: {
    position: "absolute",
    top: "70%",
    left: "0",
    width: "36vw",
    height: "36vh",
  },
  image: {
    maxWidth: "100%",  
      maxHeight: "100%", 
      border: "5px solid white",  // White Border
      boxShadow: "10px 10px 20px rgba(255, 255, 255, 0.3)", 
  },
};

export default Page9;