import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CheckWindowSize from "../../contexts/WindowSize";
import Links from "./Links";
import { nav_menu, nav_links } from "../../animations/header";

const NavMenu = ({ isMenuOpen }) => {
  const { isDesktop } = CheckWindowSize();

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.ul
          className="flex flex-col absolute z-[-1] md:z-[1] top-full left-0 w-full h-[100dvh] md:h-auto md:relative md:w-auto md:flex md:flex-row items-center justify-center text-gray-100 md:text-gray-900 text-4xl md:text-xl font-medium gap-8 pt-2 pb-2 md:mt-0 bg-gray-900 md:bg-transparent"
          variants={isDesktop ? null : nav_menu}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {Links.map((link) => (
            <motion.li
              key={link.name}
              className="pl-6 my-2 md:my-0 md:pl-0"
              variants={isDesktop ? null : nav_links}
              initial="initial"
              animate="open"
              exit="exit"
            >
              <Link to={link.link}>{link.name}</Link>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

NavMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};

export default NavMenu;
