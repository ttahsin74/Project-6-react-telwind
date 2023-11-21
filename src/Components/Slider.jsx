import { FaStar } from 'react-icons/fa'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Quote from '../assets/quote-icon.png'
import reviewData from '../mock-data/reviews.json'
import Container from './Layout/Container'
import Flex from './Layout/Flex'
import Img from './Layout/Image'
// import { FaChevronRight } from 'react-icons/fa6'
// import { FaChevronLeft } from 'react-icons/fa6'

function RcSlider() {
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    
  }

  return (
    <section>
      <Container>
        <div className="review w-[872px] m-auto font-raleway">
          <Flex className="mt-[100px] items-center justify-center gap-[38px]">
            <Img src={Quote} />
            <div className="review-title">
              <h2 className="font-oxanium text-center text-[#F95C19] text-[31px] font-bold">
                TESTIMONIAL
              </h2>
              <h3 className="text-[39px] font-extrabold text-[#11111D]">
                Our Awesome Clients
              </h3>
            </div>
          </Flex>
          <Slider {...settings}>
            {reviewData &&
              reviewData.length > 0 &&
              reviewData.map((value, index) => {
                return (
                  <div
                    key={index}
                    className="custromer-review bg-white p-[35px] "
                  >
                    <h4 className="text-[#F95C19] text-[25px] font-bold">
                      {value?.reviewTitle}
                    </h4>
                    <p className="text-[#464558] font-normal text-[16px]">
                      {value?.reviewText}
                    </p>
                    <Flex className="justify-between mt-[15px]">
                      <div className="star flex">
                        {Array(value?.rating)
                          .fill(null)
                          .map((item, i) => (
                            <FaStar key={i} color="#F95C19" />
                          ))}
                        {Array(5 - value?.rating)
                          .fill(null)
                          .map((item, i) => (
                            <FaStar key={i} />
                          ))}
                      </div>
                      <div className="custromer-profile flex gap-[15px] items-center">
                        <div className="profile-id text-end">
                          <h4 className="font-bold text-[#222132]">
                            {value?.providerName}
                          </h4>
                          <p className="font-normal text-[#464558]">
                            {value?.designation}
                          </p>
                        </div>
                        <Img
                          imgClassName="rounded-[50%]"
                          src={value?.profileImageSource}
                        />
                      </div>
                    </Flex>
                  </div>
                )
              })}
          </Slider>
        </div>
      </Container>
    </section>
  )
}

export default RcSlider
