import Image from "next/image";

interface AboutCardsProps {
  number: number;
  firstText: string;
  secondText: string;
  thirdText: string;
  location: string;
  subLocation: string;
  description: string;
}
const AboutCards: React.FC<AboutCardsProps> = (props) => {
  const {
    number,
    firstText,
    secondText,
    thirdText,
    location,
    subLocation,
    description,
  } = props;
  return (
    <div className={`card ${number === 2 ? "card-secondary" : "card-primary"}`}>
      {/* smallCard */}
      <div className="small-card">
        <Image
          src={"/homeImages/fire.svg"}
          alt="Picture of the Fire svg"
          width={14.903}
          height={14.903}
          className="fireSVG"
        />
        <p className="small-card-text">Step {number}</p>
      </div>
      {/* content */}
      <div className="content">
        {/* main text */}
        <p className="content-heading">
          <span className="schedule">{firstText} </span>
          <span className="lab">{secondText}</span> {thirdText}
        </p>
        {/* description */}
        <p className="content-text">
          {location}
          <span className="sub-location">{subLocation}</span>
        </p>
        <p className="content-description">{description}</p>
      </div>
    </div>
  );
};
export default AboutCards;
