import Container from './Layout/Container'
import Flex from './Layout/Flex'

function Fotter() {
  return (
    <section className='mt-[180px] bg-[#222132]'>
      <Container>
        <Flex className="justify-between py-[84px]">
          <div className="fotter-title font-raleway">
          <h3 className='text-[39px] font-extrabold text-[#fff]'>Get an update every week</h3>
          <h4 className=' mt-[15px] w-[492px] text-[#C5C5D2] font-normal'>We ensure that your product is delivered in the safest possible manner, at the correct location, at the right time.</h4>
          </div>
          <div className="fotter-form">
            <h5>SUBSCRIBE TO NEWSLETTER</h5>
            <input type="text" placeholder='Enter your mail' className=''/>
          </div>
        </Flex>
        <Flex>

        </Flex>
      </Container>
    </section>
  )
}

export default Fotter
