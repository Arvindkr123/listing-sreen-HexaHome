import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FlatLists from "../components/flat-lists/FlatLists";
import FilteredFlatsCategory from "../components/filter/FilteredFlatsCategory";
const Home = () => {
  return (
    <Container className="mt-5 bg-gradient">
      <Row>
        <Col>
          <FilteredFlatsCategory />
        </Col>
        <Col>
          <FlatLists />
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
