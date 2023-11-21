import Flex from "./Layout/Flex";
import Container from "./Layout/Container";
import { HiArrowSmRight } from "react-icons/hi";
import Img from "./Layout/Image";
import BannerBg from "../assets/banner-bg.png";

function Banner() {
  return (
    <section>
      <Container>
        <Flex className="items-center">
            <div className="header-content">
                <h1 className="w-[516px] text-[49px] font-normal leading-[120%] text-[#261134]">A trusted provider of <span className="block font-extrabold">courier services.</span></h1>
                <p className="font-raleway w-[330px] text-[20px] font-normal text-[#4D4D4D] mt-[20px] mb-10">We deliver your products safely to your home in a reasonable time.</p>
                <div className="items-center">
                    <a className="font-oxanium  text-[20px] py-3 px-5 bg-[#F95C19] text-[#fff] font-bold" href="#">Get Started <HiArrowSmRight className="inline"/></a>
                </div>
            </div>
            <Img className="py-[170px]"  src={BannerBg} alt={Banner-Image}/>
        </Flex>
      </Container>
    </section>
  );
}

export default Banner
