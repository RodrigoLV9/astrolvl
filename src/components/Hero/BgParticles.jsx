import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadStarsPreset } from "@tsparticles/preset-stars";
import '../../styles/bgParticles.css';

export const BgParticles = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadStarsPreset(engine);
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const particlesLoaded = (container) => {
    console.log(container);
    setTimeout(() => {
      const canvas = document.querySelector('#tsparticles canvas');
      if (canvas) {
        canvas.style.width = '500px';
        canvas.style.height = '500px';
        canvas.style.maxWidth = '500px';
        canvas.style.maxHeight = '500px';
      }
    }, 100);
  };
  const options = useMemo(
    () => ({
      preset: "stars",
      background: {
        color: {
          value: "transparent",
        },
      },
      fullScreen: {
        enable: false,
        zIndex: 1
      },
      particles: {
        color: {
          value: "#19b3e5",
        },
        number: {
          value: 100,
          density: {
            enable: true,
            area: 300,
          },
        },
        size: {
          value: { min: 1, max: 5 },
        },
        move: {
          speed: 0.7,
          outModes: {
            default: "out",
          },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
              parallax: {
              enable: false
            }
          },
            onClick: {
                enable: true,
                mode: "push",
            },
            
        },
        
      },
      modes:{
        repulse: {
          distance: 50,
            duration: 1,
            factor: 0.5,
            speed: 0.1,
            maxSpeed: 0.5,  
        },
        push: {
          quantity: 4,
        },
      },
      canvas: {
        width: 500,
        height: 500
      }
    }),
    [],
  );
  if (init) {
    return (
      <div className="particlesWrapper">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="particlesContainer"
        />
      </div>
    );
  }
  return <div className="particlesWrapper" style={{ 
    width: '500px', 
    height: '500px', 
    borderRadius: '8px'
  }} />;
};