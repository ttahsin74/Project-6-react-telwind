import Container from "./Layout/Container";
import Flex from "./Layout/Flex";
import Img from "./Layout/Image";
import Navlogo from "../assets/nav-logo.png";
import List from "./Layout/List";
import ListItem from "./Layout/ListItem";
import SearchIcon from "../assets/search-box.png";

function Navber() {

    const searchBoxElm=document.querySelector(".search-box")
    // const searchButtonElm=document.querySelector(".search-button")
    const test = ()=>{
        searchBoxElm.style.top = "0px"
    }
  return (
    <nav className="font-raleway bg-nav-bg shadow-navShadow relative">
      <Container>
        <Flex className="items-center justify-between">
            <Img src={Navlogo} alt={"Quriarbox-logo"}/>
            <List className="flex gap-[25px] text-[16px] font-bold text-[#817382]">
                <ListItem className="self-center" title="Home"/>
                <ListItem className="self-center" title="Our services" />
                <ListItem className="self-center" title="About Us" />
                <ListItem className="self-center" title="What’s new?" />
                <div className="py-[15px] flex gap-[10px] ml-[20px]">
                <Img imgClassName=" cursor-pointer" testt={test} src={SearchIcon}/>
                <a className="font-oxanium text-[20px] font-bold text-[#F95C19] rounded-[5px] inline-block py-[9px] px-[20px] bg-[#FFE4D9]" href="#">Contact us</a>
                </div>
            </List>
        </Flex>
      </Container>
      <div className="search-box bg-[#0000008a] p-[24px] absolute w-[100%] top-[-100px] right-0 text-center">
        <input className="p-[5px] w-[300px] rounded-[50px]  " type="text" placeholder="Search" />
      </div>
    </nav>
  );
}

export default Navber;
