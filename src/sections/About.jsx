import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("patriciopherrero@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="c-space my-20" id="about">
      <p className="head-text text-raspberry">about me</p>
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full mt-12">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container justify-center">
          <div className="flex flex-col gap-y-2">
              <p className="grid-headtext">patricio pérez herrero</p>
              <p className="grid-headtext">33 years old</p>
              <p className="grid-headtext">born in tucumán, argentina</p>
              <p className="grid-headtext">full stack developer</p>
              <p className="grid-headtext">designer</p>
              <p className="grid-subtext">everyone calls me pato (spanish for duck) <span className="text-base">* hence all the ducks</span></p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container justify-center">
            <div className="flex flex-col gap-y-2">
              <p className="grid-headtext">tech stack:</p>
              <p className="grid-subtext">- ruby on rails</p>
              <p className="grid-subtext">- react</p>
              <p className="grid-subtext">- typescript</p>
              <p className="grid-subtext">- next.js</p>
              <p className="grid-subtext">- three.js</p>
              <p className="grid-subtext">- python</p>
              <p className="grid-subtext">- figma</p>
              <p className="grid-subtext">- blender</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 46.94798,
                    lng: 7.44743,
                    text: "Bern, Switzerland",
                    color: "white",
                    size: 15,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                i&apos;m flexible with time zone communications & locations
              </p>
              <p className="grid-subtext">
                based in bern, switzerland and open to remote work
                worldwide.
              </p>
              <Button
                name="Contact me"
                isBeam
                containerClass="w-full mt-10 bg-salt text-raspberry"
              />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/teaching.jpg"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-cover rounded-xl"
            />

            <div>
              <p className="grid-headtext">my passion for teaching</p>
              <p className="grid-subtext">
                i&apos;ve been a teacher for over ten years, teaching
                programming, design, and english. i love sharing my knowledge
                and helping others grow.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container justify-center">
            <div className="space-y-2">
              <p className="grid-subtext text-center">just contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-raspberry">patriciopherrero@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
