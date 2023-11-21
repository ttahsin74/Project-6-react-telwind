import ServiceHeader from "./Section-header";
import Container from "./Layout/Container";
import Flex from "./Layout/Flex";
import Card from "./Layout/Card";
import CardOneIcon from "../assets/card-one.svg";
import CardTwoIcon from "../assets/card-two.svg";
import CardThreeIcon from "../assets/card-Three.svg";

function Service() {
  return (
    <>
      <section>
        <Container>
          <ServiceHeader title="SERVICE" subTitle="Our services for you" />
          <Flex className="justify-between gap-[25px]">
            <Card src={CardOneIcon} title="Business Services" define="We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries."firstItem="Corporate goods" secondItem="Shipment" thirdItem="Accesories"/>
            <Card src={CardTwoIcon} title="Statewide Services" define="Offering home delivery around the city, where your products will be at your doorstep within 48-72 hours. " firstItem="Personal items" secondItem="Percels" thirdItem="Documents" />
            <Card src={CardThreeIcon} title="Personal Services" define="You can trust us to safely deliver your most sensitive documents to the specific area in a short time."firstItem="Gift" secondItem="Package" thirdItem="Documents" />
          </Flex>
        </Container>
      </section>
    </>
  );
}
export default Service;
