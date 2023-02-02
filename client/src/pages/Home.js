import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import './Home.css';

function Home() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <>
         <div>
				 
                <Particles
					className='tsparticles'
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    
                    options={{
                        background: {
                            color: {
                                value: "#0c1022",
                            },
                        },
						fullScreen:{
							enable:true,
							zIndex:-1,
						},
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
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
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffff",
                            },
                            links: {
                                color: "#ffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.7,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                directions: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 1,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                                
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
			
						
                        detectRetina: true,
                    }}
                />
        <h1 className="titles">WATT ?</h1>
		<h2 className="citation" data-text=" Baisser,Eteindre,Économiser.">Baisser,Eteindre,Économiser.</h2>
        </div>
        </>
    );

}
export default Home;
