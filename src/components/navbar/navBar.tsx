// react
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

// Components
import NotLoggedInNavBar from "./components/notLoggedInNavBar";
import LoggedInNavBar from "./components/loggedInNavBar";

// redux
import type { RootState } from "../../redux";

// motion
import { motion } from "motion/react";

function NavBar() {
  const [notLoggedIn, setNotLoggedIn] = useState(false);

  const is_authenticated = useSelector(
    (state: RootState) => state.professional.is_authenticated
  );

  useEffect(() => {
    if (is_authenticated) {
      setNotLoggedIn(false);
    } else {
      setNotLoggedIn(true);
    }
  }, [is_authenticated]);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handle_scroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handle_scroll);
    return () => window.removeEventListener("scroll", handle_scroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all w-screen duration-500 h-17 border-b-2 border-gray-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-2xl"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      {notLoggedIn ? <NotLoggedInNavBar /> : <LoggedInNavBar />}
    </motion.div>
  );
}

export default NavBar;
