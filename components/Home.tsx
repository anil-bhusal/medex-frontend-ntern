"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import {
  containerVariant,
  staggerSlideDown,
  staggerButtonContainer,
  buttonScale,
  slideScaleLeft,
} from "@/utils/FramerAnimations";
import "../styles/_home.scss";

const Home = () => {
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
    <section className="home">
      <motion.div
        ref={ref}
        className="container"
        variants={containerVariant}
        initial="hidden"
        animate={control}
      >
        {/* Text container */}
        <motion.div
          className="textContainer"
          variants={staggerSlideDown}
          initial="hidden"
          animate={control}
        >
          {/* First Text */}
          <motion.div className="heading-1" variants={staggerSlideDown}>
            <div className="infoBox">
              <Image
                src={"/homeImages/fire.svg"}
                alt="Picture of the Fire svg"
                width={14.903}
                height={14.903}
              />
              <p className="infoText">#1 best medical center</p>
            </div>
            <div className="ratingBox">
              <motion.div
                className="personContainer"
                variants={staggerButtonContainer}
                initial="hidden"
                animate={control}
              >
                <motion.div variants={buttonScale} whileHover={{ scale: 1.05 }}>
                  <Image
                    src={"/homeImages/person1.svg"}
                    alt="Picture of the person"
                    width={30.315}
                    height={30.315}
                  />
                </motion.div>
                <motion.div variants={buttonScale} whileHover={{ scale: 1.05 }}>
                  <Image
                    src={"/homeImages/person2.svg"}
                    alt="Picture of the person"
                    width={30.315}
                    height={30.315}
                    className="personAlign"
                  />
                </motion.div>

                <motion.div variants={buttonScale} whileHover={{ scale: 1.05 }}>
                  <Image
                    src={"/homeImages/person3.svg"}
                    alt="Picture of the person"
                    width={30.315}
                    height={30.315}
                    className="personAlign"
                  />
                </motion.div>
              </motion.div>
              <div className="ratingGroup">
                <Image
                  src={"/homeImages/rating.svg"}
                  alt="Picture of the ratings"
                  width={75}
                  height={25}
                  className="ratingImage"
                />

                <div className="ratingText-main">
                  <p className="left-text">4.9/5 Rated </p>
                  <p className="right-text"> (300+ Ratings)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Home texts */}
          <motion.h1 className="hivText" variants={staggerSlideDown}>
            <span className="hivText-sub">PEP & PREP</span> TO STOP{" "}
            <span className="hivText-sub">HIV</span>
          </motion.h1>
          <motion.p className="demandText" variants={staggerSlideDown}>
            Available On-Demand In Bangkok & Other Provinces
          </motion.p>
          <motion.p className="description" variants={staggerSlideDown}>
            Buy PEP/PrEP at MedEx Neo Clinic in Bangkok and network providers
            outside Bangkok — All Online. Our specialists provide expert
            guidance on the safest options to minimize HIV transmission risks.
          </motion.p>

          {/* Button Container */}
          <motion.div
            className="buttonContainer"
            variants={staggerButtonContainer}
            initial="hidden"
            animate={control}
          >
            <Link href={"/"}>
              <motion.button
                className="buyButton"
                variants={buttonScale}
                whileHover={{ scale: 1.05 }}
              >
                Buy Now
              </motion.button>
            </Link>
            <Link href={"/"}>
              <motion.button
                className="recommendButton"
                variants={buttonScale}
                whileHover={{ scale: 1.05 }}
              >
                Recommended Packages
                <Image
                  src={"/homeImages/arrow.svg"}
                  alt="arrow svg"
                  height={12}
                  width={12}
                  className="arrowImage"
                />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Image container */}
        <motion.div
          className="imageContainer"
          variants={slideScaleLeft}
          initial="hidden"
          animate={control}
        >
          <Image
            src={"/homeImages/whitejarDesktop.png"}
            alt="Picture of the white jar"
            layout="fill"
            objectFit="contain"
            className="jarImage"
          />

          {/* large eclipse */}
          <motion.div
            variants={slideScaleLeft}
            className="largeEclipse"
          ></motion.div>
          {/* small ellipse */}
          <motion.div
            variants={slideScaleLeft}
            className="smallEllipse"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
