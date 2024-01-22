import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

export default function BackgroundEffect() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const options: ISourceOptions = useMemo(
    () => ({particles: {
      number: {
          value: 100,
          density: {
              enable: true,
          },
      },
      color: {
          value: "#ffffff",
          animation: {
              enable: true,
              speed: 20,
              sync: true,
          },
      },
      shape: {
          type: "circle",
      },
      opacity: {
          value: 0.5,
      },
      size: {
          value: {
              min: 1,
              max: 3,
          },
      },
      links: {
          enable: true,
          distance: 150,
          opacity: 0.4,
          width: 1,
          triangles: {
              enable: false,
              color: "#ffffff",
              opacity: 0.1,
          },
      },
      move: {
          enable: true,
          speed: 2,
      },
  },
  interactivity: {
      detectsOn: "window",
      events: {
          onHover: {
              enable: true,
              mode: "repulse",
          },
          onClick: {
              enable: true,
              mode: "push",
          },
      },
      modes: {
          grab: {
              distance: 400,
              links: {
                  opacity: 1,
              },
          },
          bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 0.8,
          },
          repulse: {
              distance: 150,
          },
          push: {
              quantity: 4,
          },
          remove: {
              quantity: 2,
          },
      },
  },
  background: {
      color: "transparent",
  },detectRetina: true, zLayers: 100}),
    [],
  );
  const particlesLoaded = async (container?: Container) => {
    console.log(container);
  };

  return (
    init ? <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
    /> : <></>
  );
}