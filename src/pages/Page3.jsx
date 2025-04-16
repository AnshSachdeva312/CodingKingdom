import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
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
        x: "-25%",  
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
          x: "20%",  
          opacity: 1,
          rotateY: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef3.current,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
        }
      );
  }, []);

  return (
    <div style={styles.container} ref={backgroundRef}>
      <div style={styles.background} /> {/* Background image */}
      <div ref={secondDivRef} style={styles.whiteBoxRight}>
      DENNIS AND NATASHA’S RELATIONSHIP HAD SURVIVED MANY UPS AND DOWNS, BUT THIS TIME, HE MESSED UP BIG. HE WAS SO LOST IN HIS EXPERIMENTS THAT HE FORGOT TO GET HER FLOWERS ON VALENTINE’S DAY. WHAT STARTED AS A SMALL MISTAKE TURNED INTO A FULL-BLOWN ARGUMENT, AND NOW, HE COULD FEEL THEIR CONNECTION SLIPPING AWAY
      </div>
      <div ref={imageRef2} style={styles.imageContainerLeft}>
        <img src="/images/Girlfriend.png" alt="Dennis1" style={styles.image} />
      </div>
      <div ref={imageRef3} style={styles.imageContainerRight}>
        <img src="/images/DennisFight.png" alt="Dennis1" style={styles.image} />
      </div>
    </div>
  );
};

const styles = {
    container: {
      height: "100vh",
      background: "black",
      display: "flex",
      backgroundImage: "url('./images/Background4.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      flexDirection: "column",
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
      width: "20%",
      height: "400px",
      backgroundColor: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Comic Sans MS, sans-serif",
      textAlign: "justify",
      padding: "26px",
      fontSize: "20px",
      fontWeight: "bold",
      color: "black",
      position: "absolute",
      top: "10%",
      right: "4%",
      borderRadius: "10px",
      boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.2)",
      transform: "translateX(100%)",
      zIndex:2
    },
    imageContainerLeft: {
      position: "absolute",
      top: "7.5%",
      left: "0",
      width: "107vw",  // You can modify this for image size
      height: "117vh", // You can modify this for image size
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex:1
    },
    imageContainerRight: {
        position: "absolute",
        top: "24.5%",
        Right: "0",
        width: "93vw",  // You can modify this for image size
        height: "105vh", // You can modify this for image size
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
  
  export default Page3;