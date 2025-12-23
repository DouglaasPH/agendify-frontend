// components
import LogoComponent from "@/components/logo/Logo";

// shadcn/ui
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

// lucide
import { ArrowRight, Menu } from "lucide-react";

// motion
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

function NotLoggedInNavBar() {
  const navigate = useNavigate();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About us", href: "about-us" },
    { label: "Contact", href: "contact" },
  ];

  return (
    <nav className="flex justify-between px-10 md:px-0 md:justify-around items-center h-full">
      <LogoComponent />

      {/* desktop layout */}
      <section className="md:flex sm:hidden hidden gap-15">
        {navLinks.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.2 }}
            className="relative text-gray-900 hover:text-white transition-all duration-300 group py-2"
          >
            <span className="relative z-10 text-gray-800 font-medium">
              {link.label}
            </span>
            <motion.div
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-800 group-hover:w-full transition-all duration-300"
              whileHover={{ width: "100%" }}
            />
          </motion.a>
        ))}
      </section>

      {/* desktop layout */}
      <motion.section
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.3 }}
        className="md:flex sm:hidden hidden"
      >
        <Button
          variant="outline"
          className="w-30 cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Start Now <ArrowRight className="w-4 h-4" />
        </Button>
      </motion.section>

      {/* mobile layout */}
      <motion.section
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.3 }}
        className="sm:flex md:hidden flex"
      >
        <Sheet>
          <SheetTrigger>
            <Button className="bg-gray-900/90 border-1 border-white/20 w-10">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>

          <SheetContent className="grid grid-rows-[1fr_4fr_1fr] border-none bg-white [&>button]:text-black [&>button>svg]:w-8 [&>button>svg]:h-8">
            <SheetHeader className="flex justify-center border-b-1 border-b-gray-900/20">
              <LogoComponent />
            </SheetHeader>
            <section className="px-8 pb-4 flex flex-col gap-10 border-b-1 border-b-gray-900/20">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.4 }}
                  className="text-gray-900 hover:bg-red transition-all duration-300 hover:bg-white/5 rounded-lg pl-5 w-full h-15 flex justify-start items-center"
                >
                  <span className="relative z-10 text-gray-900 text-lg">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </section>
            <section className="flex flex-col justify-evenly items-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.2 }}
                className="w-5/8 flex justify-center items-center"
              >
                <Button
                  className="cursor-pointer font-semibold text-lg w-full"
                  onClick={() => navigate("/login")}
                >
                  Start now
                  <ArrowRight className="size-4" />
                </Button>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.2 }}
                className="text-muted-foreground text-sm text-gray-900/30"
              >
                Free trial for 15 days
              </motion.p>
            </section>
          </SheetContent>
        </Sheet>
      </motion.section>
    </nav>
  );
}

export default NotLoggedInNavBar;
