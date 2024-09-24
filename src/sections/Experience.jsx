import { Canvas } from "@react-three/fiber";
import React from "react";
import { workExperiences } from "../constants";

const Experience = () => {
  return (
    <section className="c-space my-20">
      <div className="w-full text-[#00b859] ">
        <h3 className="head-text font-satoshiBold">my work experience</h3>
        <div className="work-container">
          <div className="work-content py-10">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map(
                ({ name, pos, duration, title, animation, id, icon }) => {
                  return (
                    <div key={id} className="work-content_container group">
                      <div className="flex flex-col h-full justify-start items-center py-2">
                        <div className="work-content_logo">
                          <img
                            src={icon}
                            alt="logo"
                            className="h-full w-full"
                          />
                        </div>
                        <div className="work-content_bar" />
                      </div>
                      <div className="sm:p-5 px-2.5 py-5 group-hover:text-salt transition ease-in-out duration-500">
                        <p className="font-satoshiBold text-lg">{name}</p>
                        <p className="text-sm mb-5">
                          {pos} | {duration}
                        </p>
                        <p className="font-satoshiMedium">
                          {title}
                        </p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
