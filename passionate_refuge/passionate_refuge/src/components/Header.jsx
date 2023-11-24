import React, { useRef, useState } from "react";
import css from "./Header.module.scss";

import { BiMenuAltRight } from "react-icons/bi";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../utils/motion";
import useHeaderShadow from "../hooks/useHeaderShadow";
import useOutSideAlerter from "../hooks/useOutsideAlerter";
function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();
  const menuRef = useRef();

  useOutSideAlerter({
    menuRef,
    setMenuOpened,
  });
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>webbo</div>

        <ul
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/work">work</Link>
          </li>
          <li>
            <Link to="test">Testimonial</Link>
          </li>
        </ul>

        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={"30px"} />
        </div>
      </div>
    </motion.div>
  );
}

export default Header;
