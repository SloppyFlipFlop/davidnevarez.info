import Image from "next/image";
import React, { useState, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import cloudStyles from "./../styles/components/CloudBackground.module.scss";

// const CloudBackground = () => {
//   return (
//     <div className={cloudStyles.cloud_wrapper}>
//       <Image
//         id={cloudStyles.cloud}
//         src="/cloud.png"
//         width={300}
//         height={200}
//         alt="cloud"
//       />
//     </div>
//   );
// };

function CloudBackground() {
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // const increaseScale = () => {
    const handleScroll = () => {
      const start = 100;
      const end = 200;
      const scrollY = window.scrollY;
      console.log("scrollY", scrollY);

      if (scrollY < 400) {
        setScale(1);
      }

      if (scrollY > 400 && scrollY < 1192) {
        // case scrollY > 400:
        setScale(3);
        setOpacity(1);
      } else if (scrollY > 1192 && scrollY < 3200) {
        // case scrollY < 1600:
        setScale(5);
        setOpacity(0);
      }

      // const newScale = (scrollY - start) / (end - start);
      // if (newScale <= 1) return; // makes sure scale is never smaller then the original size
      // setScale(newScale);
      // };

      // const decraseOpacity = () => {
      // const start = 100;
      // const end = 200;
      // const scrollY = window.scrollY;
      // console.log("newScale", newScale);
      // const newOpacity = ((scrollY - start) / (end - start)) * 0.1;
      // const newOpacity = 1 - (newScale - 1);
      // if (newOpacity > 1) return; // makes sure newOpacity is never bigger then the 1
      // if (newOpacity <= 0.1) return; // makes sure newOpacity is never smaller then the 0
      // setOpacity(newOpacity);
      // console.log("newOpacity", newOpacity);
      // };

      // decraseOpacity();
      // increaseScale();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cloudStyles.cloud_wrapper}
      style={{ transform: `scale(${scale})`, opacity: `${opacity}` }}
    >
      <Image
        id={cloudStyles.cloud}
        src="/cloud.png"
        width={300}
        height={200}
        alt="cloud"
      />
    </div>
  );
}

// const CloudBackground = () => {
//   useEffect(() => {
//     // Create a Three.js scene
//     const scene = new THREE.Scene();

//     // Create a Three.js camera
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );

//     // Create a Three.js renderer
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);

//     // Create a new GLTFLoader
//     const loader = new GLTFLoader();

//     // Load the Blender model using the GLTFLoader
//     loader.load("/clouds.gib", (gltf) => {
//       // Add the model to the scene
//       scene.add(gltf.scene);

//       // Start the rendering loop
//       function render() {
//         requestAnimationFrame(render);
//         renderer.render(scene, camera);
//       }
//       render();
//     });
//   }, []);
//   return <></>;
// };

// const modelPath = "/blender_cloud/clouds.obj";

// let scene, camera, renderer, model;

// const init = () => {
//   scene = new THREE.Scene();
//   camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
//   );

//   renderer = new THREE.WebGLRenderer();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   document.body.appendChild(renderer.domElement);

//   const loader = new THREE.ObjectLoader();
//   loader.load(modelPath, (obj) => {
//     model = obj;
//     scene.add(model);
//   });
// };

// const animate = () => {
//   requestAnimationFrame(animate);
//   renderer.render(scene, camera);
// };

// const CloudBackground = () => {
//   init();
//   animate();
//   return <></>;
// };

export default CloudBackground;
