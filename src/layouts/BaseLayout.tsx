import React from "react";
import { Outlet } from "react-router-dom";
import { SideBar, TopBar } from "components";
import { motion } from "framer-motion";
import "./BaseLayout.scss";

const BaseLayout = () => {
  const animations = {
    initial: { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -25 },
  };

  return (
    <div className="base-layout">
      {/* SIDE BAR BUILD */}
      <SideBar />

      {/* BODY BUILD */}
      <div className="body-build">
        {/* TOP BAR BUILD */}
        <TopBar />

        {/* CONTENT BUILD */}
        <motion.div
          className="content-build"
          variants={animations}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.65 }}
        >
          <Outlet />
        </motion.div>
      </div>
    </div>
  );
};

export default BaseLayout;
