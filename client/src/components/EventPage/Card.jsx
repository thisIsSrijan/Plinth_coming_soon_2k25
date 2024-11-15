
import { CardContainer, CardBody, CardItem } from "../utils/3d-card";

const Card = ({ image, text }) => {
  return (
    <div>
      <CardContainer className="w-[18vw] h-[30vh] rounded-lg bg-black border-2 border-[#95e110] ">
        <CardBody translateZ={50} className="p-2 ">
          {/* Image Section */}
          <CardItem translateZ={40}>
            <img src={image} alt={text} className="w-[17vw] h-[20vh]" />
          </CardItem>

          {/* Button Section */}
          <CardItem
            translateZ={40}
            className="flex justify-center items-center p-2 w-full"
          >
            <a href="https://unstop.com/college-fests/plinth-2025-plinth-organising-committee-284543">
              <button className="bg-custom-gradient p-2 rounded-lg text-sm font-semibold">
                Know More
              </button>
            </a>
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default Card;
