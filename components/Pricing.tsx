"use client";
import "../styles/_pricing.scss";
import PricingCards from "./PricingCards";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import {
  containerVariant,
  slideDownContainer,
  visibleContainer,
  visibleItem,
} from "@/utils/FramerAnimations";

const packageList = [
  {
    tests: [
      "Lab Test — HIV Antibody and Antigen Combo Test (4th Gen)",
      "Lab Test — VDRL/RPR (Syphilis)",
      "Lab Test — HBsAg (Hepatitis B Antigen)",
      "Lab Test — Anti-HCV (Hepatitis C Antibody)",
      "Lab Test — CBC (Complete Blood Count)",
      "Liver Function Test — Total Protein, Albumin, Globulin, Total Bilirubin, Direct Bilirubin, ALT (SGOT), AST (SGPT)",
      "Kidney Function Test — BUN (Blood Urea Nitrogen), Creatinine, eGFR",
      "Doctor Consultation",
      "PEP Medications - 30 Days Supply",
      "FREE Medications Delivery in Bangkok",
    ],
  },
  {
    tests: [
      "Lab Test — HIV Antibody and Antigen Combo Test (4th Gen)",
      "Lab Test — VDRL/RPR (Syphilis)",
      "Lab Test — HBsAg (Hepatitis B Antigen)",
      "Lab Test — Anti-HCV (Hepatitis C Antibody)Lab Test — Anti-HCV (Hepatitis C Antibody)",
      "Lab Test — CBC (Complete Blood Count)",
      "Liver Function Test — Total Protein, Albumin, Globulin, Total Bilirubin, Direct Bilirubin, ALT (SGOT), AST (SGPT)",
      "Kidney Function Test — BUN (Blood Urea Nitrogen), Creatinine, eGFR",
      "Doctor Consultation",
      "PEP Medications - 30 Days Supply",
      "FREE Medications Delivery in Bangkok",
    ],
  },
  {
    tests: [
      "Lab Test — HIV Antibody and Antigen Combo Test (4th Gen)",
      "Lab Test — VDRL/RPR (Syphilis)",
      "Lab Test — HBsAg (Hepatitis B Antigen)",
      "Lab Test — Anti-HCV (Hepatitis C Antibody)",
      "Lab Test — CBC (Complete Blood Count)",
      "Liver Function Test — Total Protein, Albumin, Globulin, Total Bilirubin, Direct Bilirubin, ALT (SGOT), AST (SGPT)",
      "Kidney Function Test — BUN (Blood Urea Nitrogen), Creatinine, eGFR",
      "Doctor Consultation",
      "PrEP Medications - 30-90 Days Supply",
      "FREE Medications Delivery in Bangkok",
    ],
  },
];

const Pricing = () => {
  const control = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const [activeCard, setActiveCard] = useState(2);

  const handleActiveCard = (cardNumber: number) => {
    setActiveCard(cardNumber);
  };

  return (
    <section>
      <motion.div
        ref={ref}
        variants={slideDownContainer}
        className="pricing"
        initial="hidden"
        animate={control}
      >
        <motion.div className="text-container">
          <motion.div className="heading" variants={visibleItem}>
            Flexible pricing plans for Featured Packages
          </motion.div>
          <motion.div className="description" variants={visibleItem}>
            PEP is an emergency medication taken after potential exposure to
            HIV, while PrEP is a preventive medication taken regularly to reduce
            the risk of HIV transmission.
          </motion.div>
        </motion.div>

        {/* Buttons Container */}
        <motion.div
          className="active-btn-container"
          variants={slideDownContainer}
        >
          <button
            className={activeCard === 1 ? "active" : ""}
            onClick={() => handleActiveCard(1)}
          >
            Step 1
          </button>
          <button
            className={activeCard === 2 ? "active" : ""}
            onClick={() => handleActiveCard(2)}
          >
            Step 2
          </button>
          <button
            className={activeCard === 3 ? "active" : ""}
            onClick={() => handleActiveCard(3)}
          >
            Step 3
          </button>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="cards-container"
          variants={visibleContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className={`card ${activeCard === 1 ? "active" : ""}`}
            variants={visibleItem}
          >
            <PricingCards
              number={1}
              heading="PEP (1 Month)"
              description="Take within 72 Hours Post-Exposure for 28 Days"
              tests={packageList[0].tests}
            />
          </motion.div>

          <motion.div
            className={`card ${activeCard === 2 ? "active" : ""}`}
            variants={visibleItem}
          >
            <PricingCards
              number={2}
              heading="PEP (1 Month) + 
          PrEP (1-2 Months)"
              description="Take PEP within 72 Hours Post-Exposure for 28 Days"
              subDescription="Switch to PrEP after 28 Days if Next Risky Exposure is possible within 1-3 weeks"
              tests={packageList[1].tests}
            />
          </motion.div>

          <motion.div
            className={`card ${activeCard === 3 ? "active" : ""}`}
            variants={visibleItem}
          >
            <PricingCards
              number={3}
              heading="Prep (1-3 Months)"
              description="Take PrEP Daily if you predict Next Exposure within 1-3 Weeks"
              subDescription="Always consult with a healthcare provider for personalized advice tailored to your situation."
              tests={packageList[2].tests}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Pricing;
