import Image from "next/image";
import React, { useState, useEffect } from "react";

// import * as THREE from "three"; // uninstall three if you removing this line
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// // components
import FadeInCard from "./cards/FadeIn";

import { useInView } from "react-intersection-observer";

import cloudStyles from "./../styles/components/CloudBackground.module.scss";

// // const CloudBackground = () => {
// //   return (
// //     <div className={cloudStyles.cloud_wrapper}>
// //       <Image
// //         id={cloudStyles.cloud}
// //         src="/cloud.png"
// //         width={300}
// //         height={200}
// //         alt="cloud"
// //       />
// //     </div>
// //   );
// // };

function CloudBackground() {
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);

  const [scrollValue, setScrollValue] = useState(0);

  const randomZIndex = () => {
    // pick a random number between 0 and 1

    return Math.floor(Math.random() * -1);
  };

  // useEffect(() => {
  //   // const increaseScale = () => {
  //   const handleScroll = () => {
  //     // const start = 100;
  //     // const end = 200;
  //     setScrollValue(window.scrollY);

  //     console.log("scrollY", scrollY);

  //     if (scrollValue < 400) {
  //       setScale(1);
  //     }
  //     // if (scrollValue > 400) {
  //     //   setScale(3);
  //     //   setOpacity(1);
  //     //   // console.log("below 400", opacity, scale);
  //     // }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const canvas = React.useRef(null);
  // useEffect(() => {
  //   const ctx = canvas.current.getContext("2d");
  //   const image = new Image();
  //   image.src = "/cloud.png";
  //   image.onload = () => {
  //     ctx.drawImage(image, 0, 0);
  //   };
  // }, []);

  const cloudSizes = [
    { width: 150, height: 100 },
    { width: 300, height: 200 },
    { width: 400, height: 300 },
  ];

  const randomCloudSize = Math.floor(Math.random() * cloudSizes.length);

  // return (
  //   <div id={cloudStyles.cloud_container}>
  //     {scrollValue < 480 ? (
  //       <div
  //         className={cloudStyles.cloud_wrapper}
  //         style={{
  //           transform: `scale(${scale}) translateX(${
  //             opacity == 0 ? "100%" : "0"
  //           })`,
  //           zIndex: -1,
  //           // transition: "all 1s ease-in-out",
  //         }}
  //       >
  //         <Image
  //           id={cloudStyles.cloud}
  //           style={
  //             {
  //               // display: opacity == 0 ? "none" : "block",
  //             }
  //           }
  //           src="/cloud.png"
  //           width={300}
  //           height={200}
  //           alt="cloud"
  //         />
  //       </div>
  //     ) : (
  //       <div
  //         className={`${cloudStyles.cloud_wrapper}`}
  //         style={{ transform: `scale(${scale})` }}
  //       >
  //         {/* randomly place cloud Images that animate across the scree then reset once all the cloud went across the screen, but only put enough clouds to fit on the screen */}
  //         {/* make a conatiner that move the items in it across the screen */}
  //         {/* make a container that holds the clouds */}
  //         {/* make a container that holds the clouds */}

  //         {[...Array(3)].map((_, i) => (
  //           <Image
  //             key={i}
  //             id={cloudStyles.cloud}
  //             src="/cloud.png"
  //             // randomize the width and height of the cloud by picking a random number from the array
  //             width={cloudSizes[randomCloudSize].width}
  //             height={cloudSizes[randomCloudSize].height}
  //             alt="cloud"
  //             style={{
  //               transform: `translateX(${Math.random() * 100}%) translateY(${
  //                 Math.random() * 100
  //               }%)`,
  //               zIndex: randomZIndex(),
  //               transition: "all 1s ease-in-out",
  //             }}
  //           />
  //         ))}

  //       </div>
  //     )}
  //   </div>
  // );

  const {
    ref: cloudRef,
    inView,
    entry,
  } = useInView({
    threshold: 0,
  });

  // check what the #cloud translateX is at and if it is at 100% then reset it to 0
  // useEffect(() => {
  //   // change the height of the cloud when it is at 100% translateX
  //   // gett he translateX value of the cloud
  //   // if the translateX value is at 100% then reset it to 0
  //   console.log("inView", inView);
  //   console.log("entry", entry);
  //   console.log("cloudRef", cloudRef.current);

  //   if (inView) {
  //     // cloudRef.current.style.transform = "translateX(0%)"
  //     const cloudArray = document.getElementsByClassName(cloudStyles.cloud);
  //     // if any of the clouds are off the screen then reset the cloud to 0
  //     for (let i = 0; i < cloudArray.length; i++) {
  //       if (cloudArray[i].style.transform === "translateX(100%)") {
  //         cloudArray[i].style.transform = "translateX(0%)";
  //       }
  //     }
  //   }

  //   // console.log("inView", cloudRef.current.style.transform);
  // }, [inView, entry]);

  useEffect(() => {
    // find the cloud is the furtherest to the right
    // once that cloud goes off the screen then reset all the clouds to 0

    // get all the clouds
    const cloudArray = document.getElementsByClassName(cloudStyles.cloud);
    console.log("cloudArray", cloudArray);
    for (let i = 0; i < cloudArray.length; i++) {
      // console.log("cloudArray[i]", cloudArray[i]);
      console.log(
        "cloudArray[i].style.transform",
        cloudArray[i].style.transform
      );
    }
  }, [inView]);

  return (
    <div
      className={`${cloudStyles.cloud_wrapper}`}
      style={{ transform: `scale(${scale})` }}
    >
      {/* randomly place cloud Images that animate across the scree then reset once all the cloud went across the screen, but only put enough clouds to fit on the screen */}
      {/* make a conatiner that move the items in it across the screen */}
      {/* make a container that holds the clouds */}
      {/* make a container that holds the clouds */}

      {[...Array(5)].map((_, i) => (
        <Image
          key={i}
          ref={cloudRef}
          id={cloudStyles.cloud}
          className={`${cloudStyles.cloud}`}
          src="/cloud.png"
          // randomize the width and height of the cloud by picking a random number from the array
          width={cloudSizes[randomCloudSize].width}
          height={cloudSizes[randomCloudSize].height}
          alt="cloud"
          style={{
            // transform: `translateX(${Math.random() * 100}%) translateY(${
            //   Math.random() * 100
            // }%)`,
            // make each cloud have a random top value
            position: "absolute",
            // top: `${Math.random() * 100}%`,
            // make the cloud have a random top value
            // but make sure the cloud is not off the screen
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,

            zIndex: randomZIndex(),
            transition: "all 1s ease-in-out",
          }}
        />
      ))}
    </div>
  );
}

export default CloudBackground;
