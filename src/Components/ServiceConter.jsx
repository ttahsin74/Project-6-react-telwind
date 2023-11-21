import Counter from "./Layout/Counter";
import Container from "./Layout/Container";
import Flex from "./Layout/Flex";
import Award from "../assets/award-won.svg"
import Map from "../assets/map-icon.svg"
import Custromer from "../assets/custromer.svg"
import Truck from "../assets/cement-truck.svg"
import bag from "../assets/business-bag.svg"
function ServiceCounter() {
   return(
    <section>
        <Container>
            <Flex className="justify-between">
            <Counter src={Award} limit={26} suffix="+" children="Awards won"/>
            <Counter src={Map} limit={65} suffix="+" children="States covered"/>
            <Counter src={Custromer} limit={689} suffix="k+" children="Happy clients"/>
            <Counter src={Truck} limit={130} suffix="M+" children="Goods delivered"/>
            <Counter src={bag} limit={130} suffix="M+" children="Business hours"/>
            </Flex>
        </Container>
    </section>
    )
}
export default ServiceCounter