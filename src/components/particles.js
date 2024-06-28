import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";


const Design = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
  
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);

  return (
    <div><Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
        // background: {
        //     color: {
        //         value: "#0d47a1",
        //     },
        // },
        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.5,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 35,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    }}
/></div>
  )
}

export default Design