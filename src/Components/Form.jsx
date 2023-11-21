import Container from "./Layout/Container";
import Flex from "./Layout/Flex";
import Img from "./Layout/Image";
import FormBg from "../assets/contact-bg.svg";
// import {SendIcon} from "react-icons/io";

function Form() {
    return <section>
        <Container>
            <Flex className="items-center w-[872px] m-auto mt-[250px] gap-[30px]">
                <div className="content-sec w-[50%]">
                    <Img src={FormBg}/>
                    <h3 className="my-[18px] font-oxanium text-[24px] font-bold text-[#F95C19]">REQUEST A CALLBACK</h3>
                    <h2 className="font-raleway font-extrabold text-[39px] text-[#222132]">We will contact in the shortest time.</h2>
                    <p className="font-raleway font-semibold text-[25px] text-[#9291A1]">Monday to Friday, 9am-5pm.</p>
                </div>
                <form action="">
                    <input className="bg-inherit block w-[100%] border-[2px] border-[#FFF1D] outline-[2px] outline-[#9291A1] py-[13px] pl-[20px]" type="text" placeholder="Name"/>
                    <input className="bg-inherit block w-[100%] border-[2px] border-[#FFF1D] outline-[2px] outline-[#9291A1] py-[13px] pl-[20px] mt-[18px]" type="Email" placeholder="Email"/>
                    <textarea name="message" className="w-[100%] outline-[2px] outline-[#9291A1] pl-[20px] pt-[13px] pb-[18px] border-[2px] border-[#FFF1D] bg-inherit  mt-[18px]"  rows="4" cols="50" placeholder="Message"></textarea>
                    <button className="mt-[66px] py-[12px] rounded-[5px] font-oxanium text-[#fff] font-[20px] font-bold w-[100%] bg-[#F95C19]">Send Message</button>
                </form>
            </Flex>
        </Container>
    </section>
}

export default Form