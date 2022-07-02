import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
const Navigation = () => {
  const links = ["community", "pricing", "features"]
  const [isVisible, setIsVisible] = useState(false)
  return (
    <>
      <nav className="flex items-center justify-between ">
        <a href="#" className="p-1 text-lg font-semibold">
          Fiber
        </a>
        <ul className="hidden space-x-4 md:flex">
          {links.map((link, index) => (
            <li>
              <a href="#" className="p-1 hover:underline" key={index}>
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden space-x-8 md:block">
          <button className="p-1 px-4 py-2 font-semibold border rounded border-primary">
            sign in
          </button>
          <button className="button-solid">Sign up</button>
        </div>
        <button
          className="p-1 md:hidden"
          onClick={() => setIsVisible(!isVisible)}
        >
          <img src="/assets/menu.svg" alt="menu" />
        </button>
      </nav>
      <Sidebar links={links} isVisible={isVisible} />
    </>
  )
}

export default Navigation

const Sidebar = ({ links, isVisible }) => {
  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.aside
            initial={{
              x: "-100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "-100%",
            }}
            className="fixed top-0 left-0 w-2/3 min-h-screen p-3 py-6 shadow-sidebar bg-slate-50 md:hidden"
          >
            <a href="#" className="p-1 text-lg font-semibold">
              Fiber
            </a>
            <nav className="flex flex-col pt-6 ">
              <ul className="space-y-4 divide-y">
                {links.map((link, index) => (
                  <li>
                    <a href="#" className="p-1" key={index}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between mt-10 ">
                <button className="px-4 py-2 font-semibold border rounded border-primary">
                  sign in
                </button>
                <button className="button-solid">Sign up</button>
              </div>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}
