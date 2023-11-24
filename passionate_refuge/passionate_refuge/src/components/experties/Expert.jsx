import React from "react";
import css from "./Expert.module.scss";
import { projectExperience } from "../../utils/data";
import { WhatDoIHelp } from "../../utils/data";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { staggerContainer } from "../../utils/motion";
import Header from "../Header";
function Expert() {
  return (
    <div>
      <Header />
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={css.wrapper}
      >
        <div
          className={`paddings yPaddings flexCenter innerWidth ${css.container}`}
        >
          <div className={css.leftSide}>
            {projectExperience.map((exp, index) => {
              return (
                <motion.div
                  variants={fadeIn("right", "tween", (index + 1) * 0.5, 1)}
                  className={css.exp}
                  key={index}
                >
                  <div className="flexCenter" style={{ background: exp.bg }}>
                    <exp.icon size={25} color="white" />
                  </div>

                  <div>
                    <span>{exp.name}</span>
                    <span className="secondaryText" key={index}>
                      {exp.projects} Projects
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <motion.div variants={textVariant(0.5)} className={css.rightSide}>
            <span className="primaryText">
              What Do I Help?
              <br />
            </span>
            {WhatDoIHelp.map((paragraph, index) => {
              return <span className="secondaryText">{paragraph}</span>;
            })}

            <div className={`flexCenter ${css.stats}`}>
              <div className={`flexCenter ${css.stat}`}>
                <span className="primaryText">200+</span>
                <span className="secondaryText">Projects Completed</span>
              </div>

              <div className={`flexCenter ${css.stat}`}>
                <span className="primaryText">150+</span>
                <span className="secondaryText">Happy Clients</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default Expert;
