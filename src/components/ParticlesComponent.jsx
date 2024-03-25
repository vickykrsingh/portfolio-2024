import Particles, { initParticlesEngine } from "@tsparticles/react";
import React, { useEffect, useState } from "react";
import particle from '../utils/particles'
import {loadSlim} from '@tsparticles/slim'

function ParticlesComponent() {
    const [ init, setInit ] = useState(false);

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

    const particlesLoaded = (container) => {
        console.log(container);
    };
  return (
    <>
        {init && <Particles options={particle} particlesLoaded={particlesLoaded} id="tsparticles" className="" />}
    </>
  )
}

export default ParticlesComponent