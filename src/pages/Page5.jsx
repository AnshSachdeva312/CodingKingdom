import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page5 = () => {
  const imageRef = useRef(null);
  const narrationBoxRef = useRef(null);
  const backgroundRef=useRef(null);

  useEffect(() => {
    // Animate first div (left box)
    
    // Animate second div (right box) coming from right
    
    gsap.fromTo(
      backgroundRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: backgroundRef.current,
          start: "70% 80%",
          toggleActions: "play none none none"
        },
      }
    );

    // Animate first image coming from right
    gsap.fromTo(
      imageRef.current,
      { y: "100%", opacity: 0, rotateY: 60 },
      {
        y: "10%",  
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    // Animate second image coming from left
    
  }, []);

  return (
    <div style={styles.container} ref={backgroundRef}>
      <div ref={narrationBoxRef} style={styles.narrationBox}>
        DUE RAISED...
      </div>
      
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    background: "black",
    display: "flex",
    backgroundImage: "url('/images/Background5.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
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
    background: "white",
    border: "3px solid black",
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Comic Sans MS, sans-serif",
    color:"red",
    boxShadow: "5px 5px 0px black",
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
    position:"absolute",
    width: "300vw",
    height: "100vh",
   
  },
  image: {
    width: "100%",
    height: "100%",
  },
};

export default Page5;