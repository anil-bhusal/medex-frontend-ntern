"use client";

import "../styles/_videoSection.scss";
import Link from "next/link";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { slideLeft, slideRight } from "@/utils/FramerAnimations";

const VideoSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section className="video-section">
      <motion.div ref={ref}>
        {/* two columns layout */}
        <div className="container">
          <motion.div
            className="text-container"
            variants={slideRight}
            initial="hidden"
            animate={controls}
          >
            <div className="heading">
              <p>Take Control </p>
              <p> of your Sexual Health</p>
            </div>
            <p className="description">
              Pre-Exposure Prophylaxis (PrEP) and Post-Exposure Prophylaxis
              (PEP) are revolutionary methods that significantly reduce the risk
              of contracting HIV..
            </p>
          </motion.div>

          {/* Video Container with Animation */}
          <motion.div
            className="video-container"
            variants={slideLeft}
            initial="hidden"
            animate={controls}
          >
            {/* Individual Video Items with Animation */}
            <div className="first-video">
              <video className="video-element" autoPlay loop muted>
                <source src="/videoSection/video1.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="second-video">
              <video className="video-element" autoPlay loop muted>
                <source src="/videoSection/video1.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="third-video">
              <video className="video-element" autoPlay loop muted>
                <source src="/videoSection/video1.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default VideoSection;
