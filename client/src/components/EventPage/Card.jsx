import { CardContainer, CardBody, CardItem } from "../utils/3d-card";

const Card = ({ image, text }) => {
  return (
    <div>
      <CardContainer className="relative xsm:w-[228px] sm:w-[240px] md:w-[260px] lg:w-[270px] xl:w-[280px] 2xl:w-[300px] xsm:h-[210px] sm:h-[210px] md:h-[240px] lg:h-[250px] xl:h-[260px] 2xl:h-[280px] rounded-lg bg-black border-2 border-[#95e110] ">
        <CardBody translateZ={50} className="w-auto h-[30vh] absolute top-3 flex flex-col  xsm:gap-y-2 sm:gap-y-2 md:gap-y-3 lg:gap-y-1 xl:gap-y-2 2xl:gap-y-3">
          {/* Image Section */}
          <CardItem translateZ={40}>
            <img src={image} alt={text} className=" xsm:w-[200px] sm:w-[210px] md:w-[220px] lg:w-[240px] xl:w-[250px] 2xl:w-[260px] xsm:h-[135px] sm:h-[130px] md:h-[150px] lg:h-[170px] xl:h-[180px] 2xl:h-[190px]" />
          </CardItem>

          {/* Button Section */}
          <CardItem
            translateZ={40}
            className="flex justify-center items-center p-2  w-full "
          >
            <a href="https://unstop.com/college-fests/plinth-2025-plinth-organising-committee-284543">
              <button className="bg-custom-gradient p-2 rounded-lg text-sm font-semibold xsm:w-[30vw] sm:w-[20vw] md:w-[17vw] lg:w-[12vw]">
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