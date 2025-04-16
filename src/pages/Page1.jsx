import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LightingEffect from "../components/LightingEffect";

gsap.registerPlugin(ScrollTrigger);

const Page1 = () => {
  const imageRef = useRef(null);
  const narrationBoxRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { x: "100%", opacity: 0, rotateY: 60 },
      {
        x: "0%",
        opacity: 1,
        rotateY: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);

  const handleImageClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div style={styles.container}>
      
      <LightingEffect count={25} />
      <div ref={narrationBoxRef} style={styles.narrationBox}>
        SOMEWHERE ON EARTH-919.....
      </div>

      <div style={styles.flipCardContainer} onClick={handleImageClick}>
        <div
          ref={imageRef}
          style={{
            ...styles.flipCard,
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front Side */}
          <div style={{ ...styles.flipCardFront, ...styles.flipCardFace }}>
            <img
              src="/images/Dennis Intro final.png"
              alt="Dennis"
              style={styles.image}
            />
            {!isFlipped && (
              <div style={styles.clickHereHint}>
                Click Here ↓
              </div>
            )}
          </div>

          {/* Back Side */}
          <div style={{ ...styles.flipCardBack, ...styles.flipCardFace }}>
            <p>
            MEET DENNIS: A YOUNG SCIENTIST WITH BIG DREAMS AND A PASSION FOR INNOVATION. NO MATTER HOW HARD HE TRIES, EVERY INVENTION FALLS APART. IT’S LIKE MURPHY’S LAW FOLLOWS HIM EVERYWHERE, AND THE UNLUCKIEST GUY IN THE LAB CAN NEVER CATCH A BREAK!
            </p>
          </div>
        </div>
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
    width: "100%",
  },
  narrationBox: {
    position: "absolute",
    top: "12%",
    left: "5%",
    transform: "rotate(-5deg)",
    padding: "10px 20px",
    background: "#f8e71c",
    border: "3px solid black",
    fontSize: "20px",
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    fontFamily: "Comic Sans MS, sans-serif",
    boxShadow: "5px 5px 0px red",
    whiteSpace: "nowrap",
  },
  flipCardContainer: {
    perspective: "1000px",
    width: "35vw",
    height: "55vh",
    cursor: "pointer",
  },
  flipCard: {
    width: "100%",
    height: "100%",
    position: "relative",
    transformStyle: "preserve-3d",
    transition: "transform 0.6s",
  },
  flipCardFace: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "12px",
    overflow: "hidden",
  },
  flipCardFront: {
    backgroundColor: "black",
  },
  flipCardBack: {
    backgroundColor: "white",
    color: "black",
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "Comic Sans MS, sans-serif",
    transform: "rotateY(180deg)",
    padding: "20px",
    textAlign: "center",
    boxShadow: "5px 5px 0px red",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    borderRadius: "12px",
  },
  clickHereHint: {
    position: "absolute",
    bottom: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "rgba(255, 255, 255, 0.85)",
    color: "black",
    padding: "6px 12px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    fontFamily: "Comic Sans MS, sans-serif",
    boxShadow: "2px 2px 4px rgba(0,0,0,0.4)",
    zIndex: 2,
  },
};

export default Page1;
