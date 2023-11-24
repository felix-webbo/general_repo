import React from "react";
import css from "./Home.module.scss";
import { staggerContainer } from "../../utils/motion";
import { fadeIn } from "../../utils/motion";
import { slideIn } from "../../utils/motion";
import { motion } from "framer-motion";
import Header from "../Header";

function Home() {
  return (
    <div>
      <Header />
      <section className={`paddings ${css.wrapper}`}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`innerWidth ${css.container}`}
        >
          <div className={css.upperElements}>
            <motion.span
              variants={fadeIn("right", "tween", 0.2, 1)}
              className="primaryText"
            >
              Hey There
              <br />I am Webbo.
            </motion.span>

            <motion.span
              variants={fadeIn("left", "tween", 0.2, 1)}
              className="secondaryText"
            >
              I design beautiful simple
              <br />
              things, And I love what i do
            </motion.span>
          </div>

          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            className={css.person}
          >
            <motion.img
              variants={slideIn("up", "tween", 0.2, 1)}
              src="./person.png"
              alt=""
            />
          </motion.div>

          <div className={css.lowerElements}>
            <motion.div
              variants={fadeIn("right", "tween", 0.2, 1)}
              className={css.experience}
            >
              <div className="primaryText">10</div>
              <div className="secondaryText">
                <div>Years</div>
                <div>Experience</div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("left", "tween", 0.2, 1)}
              className={css.certificate}
            >
              <img src="./certificate.png" alt="" />
              <span>CERTIFICATE</span>
              <span>UI/UX DESIGER</span>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;
