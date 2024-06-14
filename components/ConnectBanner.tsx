"use client";

import Image from "next/image";
import Link from "next/link";
import "../styles/_connectBanner.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import {
  containerVariant,
  slideRight,
  slideLeft,
} from "@/utils/FramerAnimations";

const ConnectBanner = () => {
  const control = useAnimation();

  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <>
      <section>
        <motion.div
          ref={ref}
          className="banner"
          variants={containerVariant}
          initial="hidden"
          animate={control}
        >
          {/* Text and Image container */}
          <div className="container">
            <motion.div className="banner-text" variants={slideRight}>
              <p> Connect With our professional doctors</p>
              <Link href={"/"}>
                <button className="connectBtn">Connect Now</button>
              </Link>
            </motion.div>
            <motion.div className="img-container" variants={slideLeft}>
              <Image
                src="/aboutImages/persons.svg"
                alt="persons"
                width={280}
                height={280}
                className="banner-img"
              />
            </motion.div>
          </div>
          <div className="left-eclipse"></div>
          <div className="right-eclipse"></div>
        </motion.div>
      </section>
    </>
  );
};

export default ConnectBanner;
