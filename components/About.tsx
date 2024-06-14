"use client";

import "../styles/_about.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import AboutCards from "./AboutCards";
import {
  staggerCard,
  cardVariants,
  slideDownItem,
  containerVariant,
} from "@/utils/FramerAnimations";

const About = () => {
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
    <section className="about">
      <motion.div
        className="about-content"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariant}
      >
        <motion.p className="about-heading" variants={slideDownItem}>
          <span className="font-bold">Buy</span> PEP | Prep in{" "}
          <span className="font-bold">3</span> Simple{" "}
          <span className="font-bold">Steps</span>
        </motion.p>

        {/* Cards */}
        <motion.div className="card-container" variants={staggerCard}>
          <motion.div variants={cardVariants}>
            <AboutCards
              number={1}
              firstText="Schedule"
              secondText="Mandatory Lab"
              thirdText="Tests"
              location="At Clinic or"
              subLocation=" Home/Hotel"
              description=" Schedule required lab tests by submitting the booking form below"
            />
          </motion.div>
          <motion.div variants={cardVariants}>
            <AboutCards
              number={2}
              firstText="Consult with a "
              secondText="Doctor for"
              thirdText="Prescription"
              location="In-Person or"
              subLocation=" Online"
              description="Talk to a doctor immediately after the results arrive for a prescription."
            />
          </motion.div>
          <motion.div variants={cardVariants}>
            <AboutCards
              number={3}
              firstText="Self-Pickup or"
              secondText="Order Express"
              thirdText="Delivery"
              location="Pick-up or Order to"
              subLocation=" Home/Hotel"
              description="Once you have a prescription, either pickup at the clinic or get us to deliver."
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
