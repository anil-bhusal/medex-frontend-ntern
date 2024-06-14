import Image from "next/image";
import Link from "next/link";

interface PricingCardsProps {
  number: number;
  heading: string;
  description: string;
  subDescription?: string;
  tests: string[];
}

const PricingCards: React.FC<PricingCardsProps> = (props) => {
  const { number, heading, description, subDescription, tests } = props;
  return (
    <>
      <div className="info-box">
        {/* fire svg */}
        <div className="svg-container">
          <div className="svg-ellipse">
            <Image
              src={"/homeImages/fire.svg"}
              alt="Picture of the Fire svg"
              width={14.903}
              height={14.903}
              className="fireSVG"
            />
          </div>
          <p className="svg-container-text">Step {number}</p>
        </div>
        {/* content */}
        <p className="info-box-heading">{heading}</p>
        <p className="info-box-description">{description}</p>
        {subDescription && (
          <p className="info-box-subDescription">{subDescription}</p>
        )}
      </div>

      {/* List items */}
      <div className="package-list">
        <p className="pricing-header">Package Includes</p>
        {tests?.length > 0 &&
          tests.map((test, index) => (
            <div key={index} className="package-item">
              <Image
                src="/pricingImages/Check.svg"
                alt="check"
                width={24}
                height={24}
                className="check-svg"
              />
              <p className="package-items">{test}</p>
            </div>
          ))}
      </div>

      <Link href={"/"} className="btn-container">
        <button className="choose-plan-btn">Choose Plan</button>
      </Link>
    </>
  );
};
export default PricingCards;
