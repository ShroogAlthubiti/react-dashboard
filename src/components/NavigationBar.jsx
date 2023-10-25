import React from "react";
import { motion } from "framer-motion";

import {
  LayoutDashboard,
  Activity,
  BarChart4,
  ArrowLeftRight,
  ChevronRight,
  BadgeHelp,
} from "lucide-react";

import Logo from "../assets/icon.png";
import { useState } from "react";
const navLinks = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard />,
  },
  {
    name: "Activity",
    icon: <Activity />,
  },
  {
    name: "Analytics",
    icon: <BarChart4 />,
  },
  {
    name: "Transactions",
    icon: <ArrowLeftRight />,
  },
  {
    name: "Help Center",
    icon: <BadgeHelp />,
  },
];
const variants = {
  expanded: { width: "20%" },
  nonExpanded: { width: "6%" },
};
function NavigationBar() {
  const [activeNav, setActiveNav] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonExpanded"}
      variants={variants}
      className={"py-12 flex flex-col border border-r-1 relative w-1/5 h-screen " +
       (isExpanded ? "px-6" : "px-4")}
    >
      <div className="logo-div flex space-x-3 items-center mb-3">
        <img className={isExpanded ? "w-[33px]" : "w-[39px]"} src={Logo}/>
        <span className={isExpanded ? "block" : "hidden"}>Mony Tracker</span>
      </div>
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-5 h-5 bg-[#FF8C8C] text-white rounded-full absolute -right-[10.5px]  top-14 flex justify-center items-center  "
      >
        <ChevronRight className="w-2/3" />
      </div>
      <div className="mt-10 flex flex-col space-y-8">
        {navLinks.map((item, index) => (
          <div
            className={
              "flex space-x-3 p-2 rounded cursor-pointer" +
              (activeNav === index
                ? " text-white bg-[#FF8C8C] font-semibold"
                : " ")
            }
            onClick={() => setActiveNav(index)}
            key={index}
          >
            <div> {item.icon} </div>
            <span className={!isExpanded ? "hidden" : "block" + "mb-3"}>
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default NavigationBar;
